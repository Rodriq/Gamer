$(document).ready( () => {
	const clubs = ['Atletico', 'Ball', 'Barcelona', 'Bayern', 'Cup', 'Juventus', 'Paris', 'Real', 'Scup', 'Shot'];
	select = (vv) => {
		var clubName = $(vv).text();
		$('#choicePosition').val(clubName);
		return clubName;
	}

	testB = (nnn)=>{
		console.log(nnn)
		console.log(this)
	}
})