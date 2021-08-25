<script lang="ts">
    import { helloWorldObject } from '../dummies/hello-world.object'
    import { Writable, writable } from 'svelte/store'
    import { setContext } from 'svelte'

    const exampleMessage: Writable<string> = writable(helloWorldObject.message)

    export function initExampleMessage(): void {
      return setContext('exampleMessage', exampleMessage)
    }

    export function changeMessage(message: string = 'Default message'): void {
      $exampleMessage = message;
    }
</script>
