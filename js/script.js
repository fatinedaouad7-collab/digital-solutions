<script>
function showSuccess() {
  document.getElementById("successModal").style.display = "flex";
}

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      contactForm.style.display = "none";
      showSuccess();
    }
  });
}

// DEVIS FORM
const devisForm = document.getElementById("devisForm");

if (devisForm) {
  devisForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(devisForm);

    const response = await fetch(devisForm.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      devisForm.style.display = "none";
      showSuccess();
    }
  });
}
</script>