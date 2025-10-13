import { useState } from "react";
import { useCart } from "./useCart/useCart";

const Store = () => {
  const [isModelPrice, setIsModelPrice] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const { items, removerItem } = useCart();
  const [valueTotal, setValueTotal] = useState(0);

  const getTotal = () => {
    let total: any = [];
    items.map((product) => total.push(product.price));
    setValueTotal(total.reduce((acc: number, val: number) => acc + val, 0));
  };

  const handleChangeTotal = () => {
    setIsModelPrice(!isModelPrice);
    getTotal();
  };

  return (
    <>
      <main className="w-full min-h-screen flex flex-col z-10 items-center justify-center">
        <section className="flex flex-col z-10 gap-8 items-center justify-center">
          <h1 className="text-4xl">Lista de Elementos no Carrinho</h1>
          <ul className="w-full flex flex-col gap-4">
            {items.map((products, index) => (
              <li
                className="flex flex-col items-center justi gap-1.5 pb-1.5 border-b-2 border-amber-300"
                key={index}
              >
                <p>Id: {products.id}</p>
                <div className="flex gap-4">
                  <p>Name: {products.name}</p>
                  <p>Price: {products.price}</p>
                  <p>Stock: {products.quantity}</p>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => removerItem(products.id)}>
                    Remover
                  </button>
                  <button>Editar </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <button onClick={() => setIsModal(!isModal)}>Adicionar Item</button>
            <button onClick={handleChangeTotal}>Total Price</button>
          </div>
        </section>
        <GetTotal
          isState={isModelPrice}
          setIsState={setIsModelPrice}
          text={valueTotal}
        />
        <ModalAdd State={isModal} isState={setIsModal} />
      </main>
    </>
  );
};

export const ModalAdd = ({
  State,
  isState,
}: {
  State: boolean;
  isState: any;
}) => {
  const { addItem } = useCart();

  const [isName, setIsName] = useState<string>("");
  const [isPrice, setIsPrice] = useState(0);
  const [isStock, setIsStock] = useState(0);

  const handleSumit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne refresh da página
    addItem(isName, isPrice, isStock);
    setIsName(""); // Limpa campos
    setIsPrice(0);
    setIsStock(0);
  };

  return (
    <>
      {State && (
        <main className="absolute bg-gray-800 mx-auto flex flex-col items-center justify-center w-[40vw] h-[50vh] z-20 gap-6 p-6">
          <section className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-6">Adicione seu Item</h1>
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleSumit}
              action=""
            >
              <input
                type="text"
                value={isName}
                onChange={(e) => setIsName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="text"
                value={isPrice}
                onChange={(e) => setIsPrice(Number(e.target.value))}
                placeholder="Price"
              />
              <input
                type="number"
                value={isStock}
                onChange={(e) => setIsStock(Number(e.target.value))}
                placeholder="Stock"
              />
              <button type="submit"> Confirmar</button>
            </form>
            <button
              onClick={() => isState(!State)}
              className="absolute text-2xl font-semibold top-8 right-8"
            >
              X
            </button>
          </section>
        </main>
      )}
    </>
  );
};

export const GetTotal = ({
  isState,
  setIsState,
  text,
}: {
  isState: boolean;
  setIsState: any;
  text: number;
}) => {
  return (
    <>
      {isState && (
        <main className="absolute bg-gray-700 w-full h-screen flex items-center z-20 justify-center p-12">
          <h1 className="text-4xl font-semibold">{text}</h1>
          <button
            onClick={() => setIsState(!isState)}
            className="absolute text-2xl font-semibold top-8 right-8"
          >
            X
          </button>
        </main>
      )}
    </>
  );
};

export default Store;
