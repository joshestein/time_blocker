<script lang="ts">
	import { browser } from "$app/environment"
	import FormRow from './form-row.svelte'
	import Settings from './settings.svelte';

	const getItemFromLocalStorage = (key: string, fallback: number) => {
		if (browser) console.log(key, localStorage.getItem(key));
		return browser ? localStorage.getItem(key) ?? fallback : fallback;
	}

	// const [defaultStartHour, defaultEndTime] = getDefaultHours();
	// const storedStart = getItemFromLocalStorage('startHour', defaultStartHour);
	// let startHour = typeof storedStart === 'string' ? Number(storedStart) : storedStart;
	let startHour = 10;
	let endHour = 17;

	const defaultTimeDelta = 60;
	// let storedTimeDelta = browser ? window.localStorage.getItem('timeDelta') ?? defaultTimeDelta : defaultTimeDelta;
	// let timeDelta = typeof storedTimeDelta === 'string' ? Number(storedTimeDelta) : storedTimeDelta;
	let timeDelta = defaultTimeDelta;

	let hours: number[] = [];

	$: {
		hours = [];
		for (let i = startHour; i < endHour; i++) {
			hours.push(i);
		}
	// 	if (browser) {
	// 		localStorage.setItem('startHour', startHour.toString());
	// 		localStorage.setItem('endHour', endHour.toString());
	// 		localStorage.setItem('timeDelta', timeDelta.toString());
	// 	}
	}

</script>

<h1>Time Blocker</h1>
<h5>What do you want to get done?</h5>
<Settings bind:startHour bind:endHour bind:timeDelta />
<div id="time-blocks">
	{#each hours as hour}
		<FormRow startHour={hour} />
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
