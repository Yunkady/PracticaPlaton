// js/test.js
function checkQuiz() {
	const form = document.getElementById('quiz')
	const answers = ['1', '1'] // правильные варианты q1, q2 …
	let score = 0
	answers.forEach((val, i) => {
		const q = form[`q${i + 1}`]
		if (q && [...q].find(r => r.checked && r.value === val)) score++
	})
	document.getElementById(
		'result'
	).textContent = `Верных ответов: ${score} из ${answers.length}.`
}
