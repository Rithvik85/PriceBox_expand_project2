 const bundles = document.querySelectorAll('.bundle');
    const radios = document.querySelectorAll('input[type="radio"]');

    bundles.forEach((bundle, index) => {
      bundle.addEventListener('click', () => {
        bundles.forEach(b => b.classList.remove('active'));
        bundle.classList.add('active');
        radios.forEach(r => r.checked = false);
        bundle.querySelector('input[type="radio"]').checked = true;
      });
    });