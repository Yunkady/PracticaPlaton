function checkQuiz() {
	const form = document.getElementById('quiz')
	const answers = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
	let score = 0
	answers.forEach((val, i) => {
		const group = form[`q${i + 1}`]
		if (group && [...group].some(r => r.checked && r.value === val)) score++
	})
	document.getElementById(
		'result'
	).textContent = `Верных ответов: ${score} из ${answers.length}.`
}
