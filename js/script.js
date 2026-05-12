document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("successModal");

  function showSuccess() {
    if (modal) modal.style.display = "flex";
  }

  function handleForm(formId) {
    const form = document.getElementById(formId);

    if (!form) return;

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: {
            "Accept": "application/json"
          }
        });

        if (response.ok) {
          form.reset();
          form.style.display = "none";
          showSuccess();
        } else {
          alert("❌ Erreur lors de l'envoi");
        }

      } catch (error) {
        alert("❌ Problème de connexion");
      }
    });
  }

  handleForm("contactForm");
  handleForm("devisForm");

});