<script>
	export let startTime;
	export let endTime;
	const formatter = Intl.DateTimeFormat('en-us', { hour: 'numeric', minute: 'numeric' });
</script>

<div>
	<label>
		{formatter.format(startTime)} - {formatter.format(endTime)}
		<input autocomplete="off" />
	</label>
</div>

<style>
	div {
			display: flex;
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
