<script lang="ts">
	import { timeFormatter } from '$lib/utils.js';

	let timeDeltaOptions = [15, 30, 45, 60];
	const [defaultStart, defaultEnd] = [7, 19];

	export let startHour: number;
	export let endHour: number;
	export let timeDelta: number;

	const timeBlocks: number[] = [];
	for (let i = defaultStart; i <= defaultEnd; i++) timeBlocks.push(i);
</script>

<div class="settings-wrapper">
	<div>
		<label for="start-select">Start</label>
		<select id="start-select" bind:value={startHour}>
			<option value="7">Earlier? What sort of ungodly hour do you rise?</option>
			{#each timeBlocks as timeBlock}
				<option selected={startHour === timeBlock} value={timeBlock}
					>{timeFormatter(timeBlock)}</option
				>
			{/each}
		</select>
	</div>

	<div>
		<label for="end-select">End</label>
		<select id="end-select" bind:value={endHour}>
			{#each timeBlocks as timeBlock}
				<option selected={endHour === timeBlock} value={timeBlock}
					>{timeFormatter(timeBlock)}</option
				>{/each}
		</select>
	</div>
	<div>
		<label for="time-delta">Delta</label>
		<select id="time-delta" bind:value={timeDelta}>
			{#each timeDeltaOptions as option}
				<option selected={timeDelta === option} value={option}>{option} minutes</option>
			{/each}
		</select>
	</div>
</div>

<style>
	.settings-wrapper {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		gap: 1.5rem;
	}

	@media (max-width: 600px) {
		.settings-wrapper {
			flex-flow: column wrap;
			justify-content: space-between;
			gap: 0.5rem;
		}
	}

	select {
		appearance: none; /* Reset appearance, remove default chevron */
		border-radius: 0.375rem;
		padding: 0.375rem 0.5rem 0.375rem 0.375rem;
		margin-top: 0.25rem;
		font-size: 0.875rem;

		/* Add a nicer chevron, spaced further from right-most borderr */
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
		background-position: right 0.5rem center;
		background-repeat: no-repeat;
		background-size: 1.5em 1.5em;
		width: 8rem;
	}

	label {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-weight: 500;
	}
</style>
