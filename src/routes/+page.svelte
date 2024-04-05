<script lang="ts">
	import FormRow from './form-row.svelte';
	import Settings from './settings.svelte';
	import { onDestroy } from 'svelte';
	import { localStore } from '../localStorage';

	let startHour: number;
	let endHour: number;
	let timeDelta: number;
	let data: string[];

	let startStore = localStore('startHour', 7);
	const startUnsubscribe = startStore?.subscribe((val) => (startHour = val));

	let endStore = localStore('endHour', 19);
	const endUnsubscribe = endStore?.subscribe((val) => (endHour = val));

	let deltaStore = localStore('delta', 60);
	const deltaUnsubscribe = deltaStore?.subscribe((val) => (timeDelta = val));

	let dataStore = localStore('data', []);
	const dataUnsubscribe = dataStore?.subscribe((val) => (data = val));

	onDestroy(() => {
		startUnsubscribe?.();
		endUnsubscribe?.();
		deltaUnsubscribe?.();
		dataUnsubscribe?.();
	});

	let times: { start: Date; end: Date }[] = [];
	$: {
		startStore?.set(startHour);
		endStore?.set(endHour);
		deltaStore?.set(timeDelta);
		dataStore?.set(data);

		const currentDate = new Date();
		currentDate.setHours(startHour, 0, 0);
		const endDate = new Date();
		endDate.setHours(endHour - 1, 0, 0);

		times = [];
		while (currentDate < endDate) {
			const start = new Date(currentDate);
			currentDate.setMinutes(currentDate.getMinutes() + timeDelta, 0, 0);
			times.push({ start, end: new Date(currentDate) });
		}
	}
</script>

<h1>Time Blocker</h1>
<h5>What do you want to get done?</h5>
{#if startHour && endHour && timeDelta}
	<Settings bind:startHour bind:endHour bind:timeDelta />
	<div id="time-blocks">
		{#each times as time, i}
			<FormRow start={time.start} end={time.end} bind:initial={data[i]} />
		{/each}
	</div>
{/if}

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
		max-width: 290px;
		width: 100%;
	}
</style>
