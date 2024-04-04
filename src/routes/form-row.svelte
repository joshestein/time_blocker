<script>
	export let startTime;
	export let endTime;
	const formatter = Intl.DateTimeFormat('en-us', { hour: 'numeric', minute: 'numeric' });
</script>

<div>
	<label>
		`${formatter.format(startTime)} - ${formatter.format(endTime)}`
		<input autocomplete="off" />
	</label>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
