const uploader = document.getElementById('imageUploader');
const scrapbookText = localStorage.getItem('scrapbookText_fullTypeOldTimey');

uploader.addEventListener('change', function(event) {
  const files = event.target.files;

  for (const file of files) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        createImageFrame(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
});

function createImageFrame(src) {
    const frame = document.createElement('div');
    frame.className = 'image-frame';
    frame.style.display = 'inline-block';
    frame.style.width = 'auto';
    frame.style.height = 'auto';
    frame.style.left = '20px';
    frame.style.top = '20px';
  
    const img = document.createElement('img');
    img.src = src;
  
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'resize-handle';
  
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '✖';
    deleteBtn.addEventListener('click', () => frame.remove());
  
    frame.appendChild(img);
    frame.appendChild(resizeHandle);
    frame.appendChild(deleteBtn);
    scrapbook.appendChild(frame);
  
    enableDrag(frame);
    enableResize(frame, resizeHandle);
  }
  

function enableDrag(frame) {
  let offsetX = 0, offsetY = 0, startX = 0, startY = 0;

  frame.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('resize-handle')) return;

    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    offsetX = frame.offsetLeft;
    offsetY = frame.offsetTop;

    function drag(e) {
      frame.style.left = offsetX + (e.clientX - startX) + 'px';
      frame.style.top = offsetY + (e.clientY - startY) + 'px';
    }

    function stopDrag() {
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', stopDrag);
    }

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  });
}

function enableResize(frame, handle) {
  let startX = 0, startY = 0, startWidth = 0, startHeight = 0;

  const textDiv = frame.querySelector('.scrapbook-text');
  const imageEl = frame.querySelector('img');

  handle.addEventListener('mousedown', function(e) {
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    startWidth = frame.offsetWidth;
    startHeight = frame.offsetHeight;

    let baseFontSize = 40;
    if (textDiv) {
      baseFontSize = parseInt(window.getComputedStyle(textDiv).fontSize, 10) || 40;
    }

    const baseWidth = startWidth;

    function resize(e) {
      const newWidth = startWidth + (e.clientX - startX);
      const newHeight = startHeight + (e.clientY - startY);

      frame.style.width = newWidth + 'px';
      frame.style.height = newHeight + 'px';

      if (textDiv) {
        const scale = newWidth / baseWidth;
        textDiv.style.fontSize = (baseFontSize * scale) + 'px';
      }

      if (imageEl) {
        imageEl.style.width = '100%';
        imageEl.style.height = '100%';
      }
    }

    function stopResize() {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    }

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
  });
}

document.getElementById('addToScrapbookBtn').addEventListener('click', function() {
  const outputText = document.getElementById('outputText').innerHTML;
  localStorage.setItem('scrapbookText_fullTypeOldTimey', outputText);
  window.location.href = 'oldTimeyScrapbookFullType.html';
});

window.addEventListener('DOMContentLoaded', () => {
  const scrapbookText = localStorage.getItem('scrapbookText_fullTypeOldTimey');
  if (scrapbookText) {
    const frame = document.createElement('div');
    frame.className = 'image-frame';
    frame.style.display = 'inline-block';
    frame.style.width = 'auto';
    frame.style.height = 'auto';
    frame.style.left = '30px';
    frame.style.top = '30px';
    frame.style.background = 'transparent';
    frame.style.padding = '10px';

    const textContent = document.createElement('div');
    textContent.innerHTML = scrapbookText;
    textContent.className = 'scrapbook-text';
    textContent.style.pointerEvents = 'none';

    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'resize-handle';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '✖';
    deleteBtn.addEventListener('click', () => frame.remove());

    frame.appendChild(textContent);
    frame.appendChild(resizeHandle);
    frame.appendChild(deleteBtn);
    scrapbook.appendChild(frame);

    enableDrag(frame);
    enableResize(frame, resizeHandle);
  }
});