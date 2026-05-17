import 'virtual:uno.css'

const btn = document.getElementById('themeToggle')

// применяем тему сразу при загрузке
const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'light') {
  document.body.classList.add('light')
  if (btn) btn.textContent = '☀️'
} else {
  if (btn) btn.textContent = '🌙'
}

// переключение
if (btn) {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light')

    const isLight = document.body.classList.contains('light')

    btn.textContent = isLight ? '☀️' : '🌙'
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  })
}


const root = document.documentElement

let targetX = 50
let targetY = 50

let currentX = 50
let currentY = 50

document.addEventListener("mousemove", (e) => {
  targetX = (e.clientX / window.innerWidth) * 100
  targetY = (e.clientY / window.innerHeight) * 100
})

function animate() {
  // плавное “догоняние”
  currentX += (targetX - currentX) * 0.06
  currentY += (targetY - currentY) * 0.06

  root.style.setProperty("--x", `${currentX}%`)
  root.style.setProperty("--y", `${currentY}%`)

  requestAnimationFrame(animate)
}

animate()