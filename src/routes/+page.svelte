<script>
	// import FormRow from './form-row.svelte'
	import Settings from './settings.svelte';

	// TODO: local storage
	let startTime = new Date();
	startTime.setHours(9, 0, 0);

	let endTime = new Date();
	endTime.setHours(17, 0, 0);

	let timeDelta = 60;
	let timeBlocks: {start: Date, end: Date}[] = [];

	$: {
		timeBlocks = [];
		let currentTime = new Date(startTime);
		while (currentTime <= endTime) {
			const start = new Date(currentTime);
			currentTime.setMinutes(currentTime.getMinutes() + timeDelta);
			timeBlocks.push({start, end: new Date(currentTime)});
		}
	}

</script>

<h1>Time Blocker</h1>
<h5>What do you want to get done?</h5>
<Settings bind:startTime bind:endTime bind:timeDelta />
<div id="time-blocks">
	{#each timeBlocks as tb}
		<FormRow startTime={tb.start} endTime={tb.end}/>
	{/each}
</div>

<style>
	h1 {
			margin-bottom: 0;
	}

	h5 {
			margin-top: 0.25rem;
      color: var(--accent);
	}

	#time-blocks {
			display: flex;
			flex-flow: column wrap;
			gap: 0.5rem;
			padding: 1rem;
			margin-top: 0.375rem;
			max-width: 340px;
			width: 100%;
	}
</style>
