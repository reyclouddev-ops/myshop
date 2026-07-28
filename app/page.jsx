import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import SearchBar from "@/components/SearchBar";
import PromoBanner from "@/components/PromoBanner";
import Category from "@/components/Category";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Banner />
      <PromoBanner />
      <Category />
      <BottomNav />
    </>
  );
}
