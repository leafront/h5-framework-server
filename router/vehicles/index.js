var router = require('koa-router')();

var baseModel = require('../../model/baseModel');

var common = require('../../model/common');

var data = require('../../model/data');


var querystring = require('querystring');

const {
	colorList,
	borrowingStatus,
	deviceType,
	gpsStatus,
	carType,
	driverType
	} = data;

const {
	timeComputed,
	getPage,
	dateFormat

	} = common;

router.get('/', async (ctx,next) => {

	const { roleList, shop, authority } = await common.authority(ctx,{
		url:'/api/current-user'
	})

	const params = querystring.parse(ctx.req._parsedUrl.query);

	const currentPage = parseInt(params.page) || 1;


	params.page = currentPage;

	const { results: vehiclesList,page, page_size:pageSize,total_page: totalPage,total_count:totalCount } = await baseModel.get(ctx,{
		url:'/api/vehicles',
		data:params
	})


	const showPage = 5;

	const iPage = getPage(currentPage,showPage);


	await ctx.render('vehicles',{
		pathName: ctx.path,
		authority,
		shop,
		roleList,
		vehiclesList,
		borrowingStatus,
		deviceType,
		gpsStatus,
		colorList,
		showPage,
		totalPage,
		page:currentPage,
		iPage,
		isFirstPage:(currentPage - 1 ) == 0,
		isLastPage:currentPage * pageSize >= totalCount
	})

})


router.get('/:id', async (ctx,next) => {

	const id = ctx.params.id;

	const { roleList, shop, authority } = await common.authority(ctx,{
		url:'/api/current-user'
	})

	const vehicles = await baseModel.get(ctx,{
		url:`/api/vehicles/${id}`
	})



	await ctx.render('vehicles/detail',{
		pathName: ctx.path,
		authority,
		shop,
		roleList,
		vehicles,
		carType,
		colorList,
		driverType
	})

})

router.get('/map/:id', async (ctx,next) => {

	const deviceId = ctx.params.id;

	const params = querystring.parse(ctx.req._parsedUrl.query);

	const driveType = params.driveType;

	const { data: monitor } = await baseModel.post(ctx,{
		type: 'POST',
		url: '/api/gps/tracking',
		data: {
			imei_ids: [deviceId]
		}

	})

	const { result:location } =  await common.getInterface(ctx,{
		type: 'GET',
		url: 'http://api.map.baidu.com/geocoder/v2/',
		data: {
			location: monitor[0].lat + ',' + monitor[0].lng ,
			output:'json',
			pois:0,
			ak:'98f295e5e3451c60b1036212f1f621e9'
		}

	})

	await ctx.render('vehicles/map/index',{
		monitor,
		driveType,
		location,
		deviceId,
		dateFormat,
		timeComputed
	})

})


router.get('/trace/:id', async (ctx,next) => {

	const deviceId = ctx.params.id;

	const { data: monitor } = await baseModel.post(ctx,{
		type: 'POST',
		url: '/api/gps/tracking',
		data: {
			imei_ids: [deviceId]
		}
	})

	console.log(monitor)

	const { result:location } =  await common.getInterface(ctx,{
		type: 'GET',
		url: 'http://api.map.baidu.com/geocoder/v2/',
		data: {
			location: monitor[0].lat + ',' + monitor[0].lng ,
			output:'json',
			pois:0,
			ak:'98f295e5e3451c60b1036212f1f621e9'
		}

	})

	await ctx.render('vehicles/trace/index',{
		monitor,
		location,
		dateFormat
	})

})

router.get('/history/:id', async (ctx,next) => {

	const deviceId = ctx.params.id;

	const params = querystring.parse(ctx.req._parsedUrl.query);

	const time = parseInt(params.time);

	const endTime = time;

	const startTime = (time - 3600);

	await ctx.render('vehicles/history/index',{
		deviceId,
		startTime,
		endTime,
		dateFormat
	})

})


router.post('/api/devinfo',async (ctx,next) => {

	const body = ctx.request.body;

	await common.getInterface(ctx,{
		url:'http://192.168.1.250/api/devinfo',
		data:body
	}).then((body) => {

		ctx.body = body;

	}).catch((err) => {

		ctx.status =  err.response.statusCode;

		ctx.body = err.response.body;

	})

})

router.post('/location',async (ctx,next) => {

	const { lat, lng } = ctx.request.body;

	await common.getInterface(ctx, {
		type: 'GET',
		url: 'http://api.map.baidu.com/geocoder/v2/',
		data: {
			location: lat + ',' + lng,
			output: 'json',
			pois: 0,
			ak: '98f295e5e3451c60b1036212f1f621e9'
		}
	}).then((body) => {

		ctx.body = body;

	}).catch((err) => {

		ctx.status =  err.response.statusCode;

		ctx.body = err.response.body;

	})

})

module.exports = router;