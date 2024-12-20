import movieData from "../data/movieData";
import { useState } from "./useState";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import closeIcon from "../assets/close.svg";

const useMovie = () => {
  const [activeIndex, setActiveIndex, subscribeActiveIndex] = useState<
    number | null
  >(null);

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
      <div id="movie-modal" class="p-md-5 p-3">
        <div id="movie-modal-header">
          <div>
            <button id="prev" class="btn-transparent" />
            <button id="next" class="btn-transparent"/>
          </div>
            <button id="close" class="btn-transparent"/>
        </div>
        <div id="movie-modal-body">
          <div id="movie-modal-body-info" class="p-md-3 p-2">
            <h2>${movieData[index].title.toUpperCase()}</h2>
            <div class="d-flex gap-2 flex-row">
              <p>${movieData[index].director.toUpperCase()}</p>
              <p>${movieData[index].year.toUpperCase()}</p> 
              <p>${movieData[index].country.toUpperCase()}</p>
            </div>
            <p>${movieData[index].description}</p>
            <a class="btn btn-light" href="${movieData[index].watchLink}" target="_blank">GLEDAJ</a>
          </div>
          <iframe id="movie-modal-yt" src="${movieData[index].movie}" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
    `;

    modal.appendChild(modalContent);

    modal.style.display = "block";
    modal.style.background = `url(${movieData[index].image.src}) no-repeat center center / cover`;

    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const close = document.getElementById("close");

    if (prev) {
      prev.onclick = onPrev;
      prev.style.opacity = index === 0 ? "0.25" : "1";
      prev.innerHTML = `<img src="${arrowLeft.src}" alt="Previous Movie" style="width:32px; height:32px;"/>`;
    }

    if (next) {
      next.onclick = onNext;
      next.style.opacity = index === movieData.length - 1 ? "0.25" : "1";
      next.innerHTML = `<img src="${arrowRight.src}" alt="Next Movie" style="width:32px; height:32px;"/>`;
    }
    const handleClose = () => {
      onClose();
      modal.style.display = "none";
      modal.innerHTML = "";
    };
    if (close) {
      close.onclick = handleClose;
      close.innerHTML = `<img src="${closeIcon.src}" alt="Close Modal" style="width:32px; height:32px;"/>`;
    }
  });

  const getActiveMovie = () => {
    const index = activeIndex();
    return index !== null ? movieData[index] : null;
  };

  const onNext = () => {
    const currentIndex = activeIndex();
    if (
      typeof currentIndex === "number" &&
      currentIndex < movieData.length - 1
    ) {
      setActiveIndex(currentIndex + 1);
    }
  };

  const onPrev = () => {
    const currentIndex = activeIndex();
    if (typeof currentIndex === "number" && currentIndex > 0) {
      setActiveIndex(currentIndex - 1);
    }
  };

  const onClose = () => {
    setActiveIndex(null);
  };

  const onShow = (index: number) => {
    setActiveIndex(index - 1);
  };

  return {
    activeIndex: activeIndex,
    activeMovie: getActiveMovie,
    setActiveIndex,
    onNext,
    onPrev,
    onShow,
    onClose,
    movieData,
    subscribeActiveIndex,
  };
};

export const movieHook = useMovie();
