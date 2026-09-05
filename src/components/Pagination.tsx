import { useCharacterContext } from "../context/CharacterContext";
import classes from "./Pagination.module.css";

const Pagination = () => {
  const { currentPage, totalPages, goToPage } = useCharacterContext();

  // Não renderiza nada se só existe 1 página (ou nenhum resultado ainda)
  if (totalPages <= 1) return null;

  // Gera um array [1, 2, 3, ..., totalPages] pra mapear os botões
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={classes.pagination} aria-label="Paginação de resultados">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          // aria-current ajuda leitores de tela a saberem qual página está ativa
          aria-current={page === currentPage ? "page" : undefined}
          className={page === currentPage ? classes.active : undefined}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
