import { quizData } from "../data/quizData";
import { useState } from "./useState";
import closeIcon from "../assets/close.svg";
interface IQuizResult {
  correctAnswers: number;
  time: number;
  name: string;
}
const useQuiz = () => {
  const [activeIndex, setActiveIndex, subscribeActiveIndex] = useState<
    number | null
  >(null);

  const saveStoreResults = (results: IQuizResult[]) => {
    localStorage.setItem("results", JSON.stringify(results));
  };

  const getStoredResults = () => {
    const results = localStorage.getItem("results");
    return results ? JSON.parse(results) : [];
  };

  const [time, setTime, subscribeTime] = useState(600);

  const [results, setResults, subscribeResults] = useState<IQuizResult[]>([]);
  const [quizHistory, setQuizHistory] = useState<(boolean | null)[]>(
    quizData.map(() => null)
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  subscribeResults((results) => {
    const showResultsButton = document.getElementById("show-results");
    if (showResultsButton) {
      if (results.length > 0) {
        showResultsButton.classList.remove("d-none");
        showResultsButton.onclick = () => createResultsModal();
      } else {
        showResultsButton.classList.add("d-none");
      }
    }
  });

  const sortResults = (results: IQuizResult[]) => {
    return results.sort((a, b) => {
      if (a.correctAnswers === b.correctAnswers) {
        return a.time - b.time;
      }
      return b.correctAnswers - a.correctAnswers;
    });
  };

  subscribeTime((time) => {
    document.getElementById("timer")!.innerText =
      `${Math.floor(time / 60) < 10 ? "0" : ""}${Math.floor(time / 60)}:${time % 60 < 10 ? "0" : ""}${time % 60}`;
    if (time === 0) {
      console.log("time is 0");
      const correctAnswers = quizHistory().filter((result) => result).length;
      const name = prompt("Unesi ime:");
      setResults(
        sortResults([
          ...results(),
          { correctAnswers, time, name: name || "Nepoznati Junak" },
        ])
      );
    }
  });

  subscribeActiveIndex((index) => {
    const modal = document.getElementById("modal");
    if (index === null) {
      return;
    }
    if (!modal) {
      console.error("Modal element not found.");
      return;
    }

    modal.innerHTML = "";

    const modalContent = document.createElement("div");
    modalContent.id = "modal-content";
    modalContent.innerHTML = `
      <div id="quiz-modal">
        <div id="quiz-modal-header">
          <div class="indicator-bar">
          ${quizHistory()
            .map((correct, id) => {
              return `<span data-id=${id} class="indicator ${
                correct === null
                  ? "unanswered"
                  : correct
                    ? "correct"
                    : "incorrect"
              }"></span>`;
            })
            .join("")}
          </div>
          <div id="timer">${Math.floor(time() / 60) < 10 ? "0" : ""}${Math.floor(time() / 60)}:${time() % 60 < 10 ? "0" : ""}${time() % 60}</div>
            <button id="close" class="btn btn-dark"/>
        </div>
        <div id="quiz-modal-body">
          <div id="quiz-modal-body-info">
            <h2>${quizData[index].question.toUpperCase()}</h2>
            <div class="d-flex flex-column">
              ${quizData[index].answers
                .map(
                  (answer, i) =>
                    `<button class="btn btn-primary py-4 border answer">${answer.toUpperCase()}</button>`
                )
                .join("")}
            </div>
            <button id="confirm" class="btn btn-dark py-4 border w-100 ">POTVRDI</button>
        </div>
      </div>
    `;

    modal.appendChild(modalContent);

    modal.style.display = "block";

    const answers = document.getElementsByClassName("answer");
    const confirm = document.getElementById("confirm");
    const close = document.getElementById("close");

    if (close) {
      close.onclick = onClose;
      close.innerHTML = `<img src="${closeIcon.src}" alt="Close Modal" style="width:32px; height:32px;"/>`;
    }
    if (confirm) {
      confirm.onclick = onConfirm;
    }
    for (let i = 0; i < answers.length; i++) {
      (answers[i] as HTMLButtonElement).onclick = () => onSelected(i);
    }
  });

  const getActiveQuiz = () => {
    const index = activeIndex();
    return index !== null ? quizData[index] : null;
  };

  const onClose = () => {
    const showResultsButton = document.getElementById("show-results");
    if (showResultsButton) {
      showResultsButton.classList.remove("d-none");
    }
    setActiveIndex(null);

    const modal = document.getElementById("modal");
    clearInterval(interval);
    setTime(600);
    setQuizHistory(quizData.map(() => null));
    console.log("close");
    if (modal) {
      modal.style.display = "none";
      modal.innerHTML = "";
    }
  };

  let interval: NodeJS.Timeout;

  const onShow = () => {
    setActiveIndex(0);
    setResults(getStoredResults());
    interval = setInterval(() => {
      if (time() === 0) {
        clearInterval(interval);
        onClose();
        return;
      }
      setTime(time() - 1);
    }, 1000);
  };

  const onConfirm = () => {
    const quiz = getActiveQuiz();
    const selectedAnswerValue = selectedAnswer();
    const activeIndexValue = activeIndex();
    if (typeof selectedAnswerValue !== "number" || activeIndexValue === null) {
      alert("Odaberi prvo odgovor.");
      return;
    }
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    if (quiz && quiz.correct === selectedAnswerValue) {
      document
        .getElementsByClassName("answer")
        [selectedAnswerValue].classList.add("correct");

      document
        .getElementsByClassName("indicator")
        [activeIndexValue].classList.remove("unanswered");
      document
        .getElementsByClassName("indicator")
        [activeIndexValue].classList.add("correct");
    } else {
      document
        .getElementsByClassName("answer")
        [selectedAnswerValue].classList.add("incorrect");

      document
        .getElementsByClassName("indicator")
        [activeIndexValue].classList.remove("unanswered");
      document
        .getElementsByClassName("indicator")
        [activeIndexValue].classList.add("incorrect");
    }
    const newQuizHistory = quizHistory().slice();
    newQuizHistory[activeIndexValue] = quiz?.correct === selectedAnswerValue;
    setQuizHistory(newQuizHistory);
    setTimeout(() => {
      setSelectedAnswer(null);
      if (typeof activeIndexValue === "number") {
        if (activeIndexValue === quizData.length - 1) {
          const correctAnswers = quizHistory().filter(
            (result) => result
          ).length;
          const name = prompt("Unesi ime:");
          setResults(
            sortResults([
              ...results(),
              {
                correctAnswers,
                time: 600 - time(),
                name: name || "Nepoznati Junak",
              },
            ])
          );
          saveStoreResults(results());
          onClose();
          clearInterval(interval);
          return;
        }
        setActiveIndex(activeIndexValue + 1);
      }
    }, 1000);
  };

  const onSelected = (index: number) => {
    const selectedAnswerValue = selectedAnswer();
    if (selectedAnswerValue !== null) {
      document
        .getElementsByClassName("answer")
        [selectedAnswerValue].classList.remove("selected");
    }
    setSelectedAnswer(index);
    document.getElementsByClassName("answer")[index].classList.add("selected");
  };

  const createResultsModal = () => {
    console.log("check");
    const modal = document.getElementById("modal");

    if (!modal) {
      console.error("Modal element not found.");
      return;
    }

    modal.innerHTML = "";
    modal.style.display = "block";

    const modalContent = document.createElement("div");
    modalContent.id = "modal-content";
    modalContent.innerHTML = `
      <div id="results-modal">
        <div class="p-4" id="results-modal-header">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="p-0 m-0">TOP 10 REZULTATA</h2>
            <button id="close-results" class="btn btn-transparent"/>
          </div>
        </div>
        <div class="p-4" id="results-modal-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Ime</th>
                <th>Broj Tačnih</th>
                <th>Vreme</th>
              </tr>
            </thead>
            <tbody>
              ${results()
                .slice(0, 10)
                .map(
                  (result) =>
                    `<tr>
                      <td>${result.name}</td>
                      <td>${result.correctAnswers}</td>
                      <td>${Math.floor(result.time / 60)}:${result.time % 60}</td>
                    </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    modal.appendChild(modalContent);

    modal.style.display = "block";

    const close = document.getElementById("close-results");

    if (close) {
      close.onclick = () => {
        modal.style.display = "none";
        modal.innerHTML = "";
      };
      close.innerHTML = `<img src="${closeIcon.src}" alt="Close Modal" style="width:32px; height:32px;"/>`;
    }
  };

  const getInitialResults = () => {
    return setResults(getStoredResults());
  };

  return {
    activeIndex: activeIndex,
    activeQuiz: getActiveQuiz,
    setActiveIndex,
    onShow,
    onClose,
    subscribeActiveIndex,
    played: results.length > 0,
    onShowResults: createResultsModal,
    getInitialResults,
  };
};

export const quizHook = useQuiz();
