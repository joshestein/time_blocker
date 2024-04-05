<script lang="ts">
	export let startHour;
	function hourFormatter(hour: number) {
		const stringHour = hour < 10 ? `0${hour}` : String(hour);
		return hour < 12 ? `${stringHour}:00 AM` : `${stringHour}:00 PM`
	}
	// export let endHour;
	// const formatter = Intl.DateTimeFormat('en-us', { hour: 'numeric', minute: 'numeric' });
</script>

<div>
	<label for={startHour}>
		{hourFormatter(startHour)} - {hourFormatter(startHour + 1)}
	</label>
	<input id={startHour} autocomplete="off" />
</div>

<style>
	div {
			display: flex;
      /*display: var(--display, none);*/
			flex-flow: row wrap;
			justify-content: space-between;
			align-items: center;
	}
	input {
      border: 1px solid var(--accent);
			font-size: 1rem;
      padding: 0.25rem;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
</style>
