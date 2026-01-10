import Header from "@/components/landingpage/navigations /header";

export default function VenturesSection() {
  return (
    <main className="w-full text-[#143b2f]">
      <Header />
      <section className="relative bg-[#123f35] text-white h-125 flex flex-col justify-center items-center px-6">
        <div className="absolute inset-0 bg-[url('/images/stock.jpg')] bg-cover bg-center opacity-" />
        <div className="relative max-w-5xl text-center space-y-8 h-full flex flex-col mt-10 justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#d4a441] mb-8">
            Ventures
          </h1>
          <p className="text-lg md:text-3xl max-w-3xl mx-auto mb-12">
            Building sustainable enterprises rooted in heritage, responsibility,
            and community impact.
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto">
            Prince Otunba Adedotun Adebola Babatunde Jagun oversees ventures
            that address real needs—food security, land stewardship, and
            responsible development—while creating long-term value for
            communities and stakeholders.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Enterprise with Purpose
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Prince Adedotun’s approach to enterprise is guided by
            sustainability, responsibility, and long-term thinking. Each venture
            under his stewardship is designed to serve people, respect culture,
            and support economic growth—balancing tradition with modern business
            practices.
          </p>
        </div>
      </section>

      {/* FIDIPOTE FOOD MARKET */}
      <section className="bg-[#f9faf8] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif mb-4">Fidipote Food Market</h3>
            <p className="text-gray-700 mb-4">
              Fidipote Food Market focuses on farming, food sourcing, and the
              distribution of fresh agricultural produce to local and
              international markets. The venture is built on a simple principle:
              nutritious food should be accessible, affordable, and sustainably
              produced.
            </p>
            <p className="text-gray-700 mb-6">
              By working closely with farmers and streamlining supply chains,
              Fidipote Food Market supports local agriculture while improving
              food availability for households and communities.
            </p>
            <a href="#" className="text-[#d4a441] font-medium hover:underline">
              Explore Fidipote Food Market
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src="/fidipote-food.jpg"
              alt="Fidipote Food Market"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* FIDIPOTE ROYALTY LIMITED */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6">
            <img
              src="/fidipote-realty.jpg"
              alt="Fidipote Royalty Limited"
              className="rounded-lg w-full"
            />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-serif mb-4">
              Fidipote Royalty Limited
            </h3>
            <p className="text-gray-700 mb-4">
              Fidipote Royalties is the real estate and property development arm
              under Prince Adedotun’s leadership. The venture focuses on land
              management, residential development, and community-oriented
              projects that respect cultural heritage while embracing modern
              planning standards.
            </p>
            <p className="text-gray-700 mb-6">
              Through a long-term approach to value creation, Fidipote Royalties
              aligns traditional land ownership with sustainable real estate
              practices that benefit families, investors, and host communities.
            </p>
            <a href="#" className="text-[#d4a441] font-medium hover:underline">
              View Fidipote Royalty
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
