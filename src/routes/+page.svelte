<script>
	// import FormRow from './form-row.svelte'
	import Settings from './settings.svelte';

	// TODO: local storage
	let startTime = new Date();
	startTime.setHours(9, 0, 0);

	let endTime = new Date();
	endTime.setHours(17, 0, 0);

	let timeDelta = 60;
</script>

<h1>Time Blocker</h1>
<Settings bind:startTime bind:endTime bind:timeDelta />
<ul>
	<!--{#each timeBlocks as tb}-->
	<!--    <FormRow></FormRow>-->
	<!--{/each}-->
</ul>

<style>
</style>
