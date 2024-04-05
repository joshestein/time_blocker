<script lang="ts">
	import { hourFormatter } from '$lib/utils';

	export let startHour;
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
