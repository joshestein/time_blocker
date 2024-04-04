<script lang="ts">
	// import { getTimeBlocks } from '$lib/utils';

	let timeDeltaOptions = [15, 30, 45, 60];
	export let startTime: string;
	export let endTime: string;
	const timeBlocks: string[] = [];

	// const formatter = Intl.DateTimeFormat('en-us');
	let currentTime = new Date(startTime);
	let end = new Date(endTime);
	while (currentTime <= end) {
		timeBlocks.push(currentTime.toString());
		currentTime.setMinutes(currentTime.getMinutes() + 60);
	}

	const formatter = Intl.DateTimeFormat('en-us', { hour: '2-digit', minute: '2-digit' });
</script>

<div class="settings-wrapper">
	<div>
		<label
			>Start
			<select id="start-select" bind:value={startTime}>
				{#each timeBlocks as timeBlock}
					<option value={timeBlock}>{formatter.format(Date.parse(timeBlock))}</option>
				{/each}
			</select>
		</label>
	</div>

	<div>
		<label
			>End
			<select id="end-select" bind:value={endTime}>
				{#each timeBlocks as timeBlock}
					<option value={timeBlock}>{formatter.format(Date.parse(timeBlock))}</option>
				{/each}
			</select>
		</label>
	</div>
	<div>
		<label
			>Time delta
			<select>
				{#each timeDeltaOptions as option}
					<option value={option}>{option} minutes</option>
				{/each}
			</select></label
		>
	</div>
</div>

<style>
	.settings-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1.5rem;
	}
</style>
