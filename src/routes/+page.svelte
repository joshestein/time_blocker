<script>
	// import FormRow from './form-row.svelte'
	import Settings from './settings.svelte';

	// TODO: local storage
	let start = new Date();
	start.setHours(9, 0, 0);
	let startTime = start.toString();

	let end = new Date();
	end.setHours(17, 0, 0);
	let endTime = end.toString();

	let timeDelta = 60;
</script>

<h1>Time Blocker</h1>
<Settings bind:startTime bind:endTime />
<p>{startTime}</p>
<p>{endTime}</p>
<ul>
	<!--{#each timeBlocks as tb}-->
	<!--    <FormRow></FormRow>-->
	<!--{/each}-->
</ul>

<style>
</style>
