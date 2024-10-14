const search = async () => {
  document.getElementById("container-1").style.display = "none";
  const resultContainer = document.getElementById("container-2");
  resultContainer.innerHTML = "";
  const word = document.getElementById("word").value;
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const meanings = data[0].meanings;
      for (const meaning of meanings) {
        const partOfSpeechDiv = document.createElement("div");
        partOfSpeechDiv.innerHTML = `<strong>Part of Speech:</strong> ${meaning.partOfSpeech}`;
        resultContainer.appendChild(partOfSpeechDiv);

        const meaningDiv = document.createElement("div");
        meaningDiv.innerHTML = `<strong>Definition:</strong> ${meaning.definitions[0].definition}`;
        resultContainer.appendChild(meaningDiv);

        const exampleDiv = document.createElement("div");
        exampleDiv.innerHTML = `<strong>Example:</strong> ${meaning.definitions[0].example}`;
        resultContainer.appendChild(exampleDiv);

        if (meaning.definitions[0].synonyms.length > 0) {
          const synonymsDiv = document.createElement("div");
          synonymsDiv.innerHTML = `<strong>Synonyms:</strong>`;
          const synonymsList = document.createElement("ul");

          for (const synonym of meaning.definitions[0].synonyms) {
            const synonymLi = document.createElement("li");
            synonymLi.innerHTML = synonym;
            synonymsList.appendChild(synonymLi);
          }
          synonymsDiv.appendChild(synonymsList);
          resultContainer.appendChild(synonymsDiv);
        }

        if (meaning.definitions[0].antonyms.length > 0) {
          const antonymsDiv = document.createElement("div");
          antonymsDiv.innerHTML = `<strong>Antonyms:</strong>`;
          const antonymsList = document.createElement("ul");

          for (const antonym of meaning.definitions[0].antonyms) {
            const antonymLi = document.createElement("li");
            antonymLi.innerHTML = antonym;
            antonymsList.appendChild(antonymLi);
          }
          antonymsDiv.appendChild(antonymsList);
          resultContainer.appendChild(antonymsDiv);
        }
      }

      resultContainer.appendChild(document.createElement("hr"));
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
  document.getElementById("container-2").style.display = "block";
};
