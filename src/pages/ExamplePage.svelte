<script>
    import {initExampleMessage} from '../providers/example.provider'
    import {getContext} from 'svelte'
    import {changeMessage} from '../providers/example.provider'
    initExampleMessage()


    import ExampleComponent from '../components/ExampleComponent.svelte'
    const exampleMessage = getContext('exampleMessage')
</script>
<div>HI</div>
<ExampleComponent exampleMessage={exampleMessage}/>
<ExampleComponent exampleMessage={exampleMessage}/>
<button on:click={(event)=>changeMessage()}></button>
