// script_blog.js

const modal = document.getElementById('post-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalContent = document.getElementById('modal-content');
const modalTags = document.getElementById('modal-tags');

// Cerrar modal
closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

// Cargar posts y manejar clics
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('blog-posts');

  try {
    const response = await fetch('posts.json');
    if (!response.ok) throw new Error('No se pudo cargar el archivo posts.json');
    const posts = await response.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      container.innerHTML = '<p class="text-center text-gray-600">No hay artículos disponibles.</p>';
      return;
    }

    container.innerHTML = posts.map((post, index) => `
      <article class="animate bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer" data-index="${index}">
        <div class="text-sm text-blue-600 font-medium mb-2">${post.date}</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">${post.title}</h2>
        <p class="text-gray-700 leading-relaxed">${post.content}</p>
        ${post.tags ? `<div class="mt-4 flex flex-wrap gap-2">
          ${post.tags.map(tag => `<span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">${tag}</span>`).join('')}
        </div>` : ''}
      </article>
    `).join('');

    // Añadir evento de clic
    document.querySelectorAll('[data-index]').forEach(el => {
      el.addEventListener('click', () => {
        const post = posts[el.dataset.index];
        modalTitle.textContent = post.title;
        modalDate.textContent = post.date;
        modalContent.innerHTML = (post.fullContent || post.content).replace(/\n/g, '<br>');
        modalTags.innerHTML = post.tags
          ? post.tags.map(tag => `<span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">${tag}</span>`).join('')
          : '';
        modal.classList.remove('hidden');
      });
    });

  } catch (error) {
    console.error('Error al cargar los posts:', error);
    container.innerHTML = `<div class="text-center text-red-600"><i class="fas fa-exclamation-triangle"></i> Error al cargar los artículos.</div>`;
  }
});