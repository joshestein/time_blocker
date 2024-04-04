<script lang="ts">
	let timeDeltaOptions = [15, 30, 45, 60];
	export let startTime: Date;
	export let endTime: Date;
	export let timeDelta: number;

	// This goddamn nonsense is because if we create new Date() objects for the start and end times
	// Svelte cannot properly bind the initial values (since they are different objects) and so the start and end
	// times would not be properly selected. This took me way too long to figure out.
	const timeBlocks: Date[] = [startTime];
	let currentTime = new Date(startTime);
	currentTime.setMinutes(currentTime.getMinutes() + 60);
	while (currentTime < endTime) {
		timeBlocks.push(new Date(currentTime));
		currentTime.setMinutes(currentTime.getMinutes() + 60);
	}
	timeBlocks.push(endTime);

	const formatter = Intl.DateTimeFormat('en-us', { hour: '2-digit', minute: '2-digit' });
</script>

<div class="settings-wrapper">
	<div>
		<label for="start-select">Start</label>
		<select id="start-select" bind:value={startTime}>
			{#each timeBlocks as timeBlock}
				<option value={timeBlock}>{formatter.format(timeBlock)}</option>
			{/each}
		</select>
	</div>

	<div>
		<label for="end-select">End</label>
		<select id="end-select" bind:value={endTime}>
			{#each timeBlocks as timeBlock}
				<option value={timeBlock}>{formatter.format(timeBlock)}</option>
			{/each}
		</select>
	</div>
	<div>
		<label for="time-delta">Delta</label>
		<select id="time-delta" bind:value={timeDelta}>
			{#each timeDeltaOptions as option}
				<option value={option}>{option} minutes</option>
			{/each}
		</select>
	</div>
</div>

<style>
	.settings-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1.5rem;
	}

	select {
		appearance: none;  /* Reset appearance, remove default chevron */
		border-radius: 0.375rem;
		padding: 0.375rem 0.5rem 0.375rem 0.375rem;
		margin-top: 0.25rem;
		font-size: 0.875rem;
		background-color: rgb(255 255 255 / 0.05);

		/* Add a nicer chevron, spaced further from right-most borderr */
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
		background-position: right 0.5rem center;
		background-repeat: no-repeat;
		background-size: 1.5em 1.5em;
		min-width: 8rem;
	}

  label {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      font-weight: 500;
  }
</style>
