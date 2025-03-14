import CashAndProfit from "@/components/cashAndProfit";
import Header from "@/components/header";
import Tabs from "@/components/tabs";

export default function Home() {
  return (
    <div className="p-5">
      <Header />

      {/* Tabs */}
      <Tabs />

      <CashAndProfit />
    </div>
  );
}
