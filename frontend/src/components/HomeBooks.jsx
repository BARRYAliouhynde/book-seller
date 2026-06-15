import React from "react";
import { homeBooksStyles as styles } from "../assets/dummystyles";
import { useCart } from "../cartContext/cartContext";
import { Star } from "lucide-react";
import { hbbooks } from "../assets/dummydata";

const HomeBooks = () => {
  const { cart, dispatch } = useCart();
  const inCart = (id) => cart?.items?.some((item) => item.id === id);

  const handleAdd = (book) =>
    dispatch({ type: "ADD_ITEM", payload: { ...book, quantity: 1 } });
  const handleInc = (id) => dispatch({ type: "INCREMENT", payload: { id } });
  const handleDec = (id) => dispatch({ type: "DECREMENT", payload: { id } });

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className=" text-center mb-12">
            <h2 className={styles.heading}>Bookseller Favorites</h2>
            <div className={styles.headingLine} />
          </div>

          <div className={styles.grid}>
            {hbbooks.map((book) => {
              const item = inCart(book.id);
              return (
                <div key={book.id} className={styles.bookCard}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={book.image}
                      alt={book.title}
                      className={styles.image}
                    />

                    <div className={styles.rating}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          className={`h-4 w-4 ${i < book.rating ? "text-gray-300" : "text-[#43C6AC] fill-[#43C6AC]"}`}
                          key={i}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBooks;
