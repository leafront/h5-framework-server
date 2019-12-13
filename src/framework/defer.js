export default function (count = 50) {
  return {
    data () {
      return {
        displayPriority: 0
      }
    },
    mounted () {
      this.runDisplayPriority()
    },
    methods: {
      runDisplayPriority () {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority++
            if (this.displayPriority < count) {
              step()
            }
          })
        }
        step()
      },
      defer (priority) {
        console.log(this.displayPriority,priority)
        return this.displayPriority >= priority
      }
    }
  }
}