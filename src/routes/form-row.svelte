<script lang="ts">
	export let start: Date;
	export let end: Date;
	const formatter = Intl.DateTimeFormat('en-us', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
</script>

<div>
	<label for={start.toString()}>
		{formatter.format(start)} - {formatter.format(end)}
	</label>
	<input id={start.toString()} autocomplete="off" />
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
