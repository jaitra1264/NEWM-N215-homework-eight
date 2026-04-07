const pages = {
  home: `
    <section class="page">
      <div class="page-hero">
        <img
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop"
          alt="A vast open ocean under a dramatic sky"
        />
        <div class="hero-overlay">
          <h1>One Piece</h1>
          <p class="hero-sub">The greatest treasure in the world awaits at the end of the Grand Line</p>
        </div>
      </div>
      <div class="page-body">
        <p>
          <em>One Piece</em> is a manga and anime series created by Eiichiro Oda that has
          captivated audiences worldwide since its debut in 1997. Set in a world of vast
          oceans divided into four seas by the treacherous Grand Line, the story follows
          Monkey D. Luffy &mdash; a young pirate with a rubber body granted by the
          Gum-Gum Devil Fruit &mdash; as he assembles a crew of extraordinary individuals
          and sets sail to claim the legendary treasure known as the One Piece. Whoever
          finds it will be crowned King of the Pirates. With over 1,100 manga chapters
          and a sprawling cast of unforgettable characters, <em>One Piece</em> is one
          of the best-selling manga series of all time.
        </p>
        <div class="card-grid">
          <div class="card">
            <span class="card-icon">&#9876;</span>
            <h3>Characters</h3>
            <p>Meet the Straw Hat Pirates and the legendary figures who define this world.</p>
          </div>
          <div class="card">
            <span class="card-icon">&#127965;</span>
            <h3>Islands</h3>
            <p>Explore the iconic locations scattered across the four seas and the Grand Line.</p>
          </div>
          <div class="card">
            <span class="card-icon">&#127826;</span>
            <h3>Devil Fruits</h3>
            <p>Discover the mysterious fruits that grant incredible powers &mdash; at a price.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  characters: `
    <section class="page">
      <div class="page-hero">
        <img
          src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1200&auto=format&fit=crop"
          alt="Silhouettes of adventurers against a colorful sunset sky"
        />
        <div class="hero-overlay">
          <h1>The Straw Hat Pirates</h1>
          <p class="hero-sub">A crew bound not by blood, but by dream and loyalty</p>
        </div>
      </div>
      <div class="page-body">
        <p>
          The Straw Hat Pirates are the heart of <em>One Piece</em> &mdash; a ragtag crew
          assembled one member at a time as Luffy sails the Grand Line. Each member carries
          a deeply personal dream that drives them forward. Roronoa Zoro, the stoic
          swordsman, swears to become the world&rsquo;s greatest swordfighter. Nami, the
          brilliant navigator, dreams of mapping every ocean. Usopp aspires to become a
          brave warrior of the sea. Sanji searches for the mythical All Blue, a sea where
          fish from every ocean gather. Tony Tony Chopper, the reindeer doctor, wants to
          cure any illness. Nico Robin seeks to uncover the lost history of the world.
          Franky built himself into a cyborg shipwright to craft the perfect vessel.
          Brook, a living skeleton, longs to reunite with a dear friend across the sea.
          Together, they face impossible odds &mdash; and win.
        </p>
        <div class="fact-bar">
          <div class="fact">
            <strong>9</strong>
            <span>Members of the Straw Hat crew</span>
          </div>
          <div class="fact">
            <strong>3,161,000,000</strong>
            <span>Luffy&rsquo;s current bounty in berries</span>
          </div>
          <div class="fact">
            <strong>1997</strong>
            <span>Year the series began</span>
          </div>
        </div>
      </div>
    </section>
  `,

  islands: `
    <section class="page">
      <div class="page-hero">
        <img
          src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&auto=format&fit=crop"
          alt="A lush tropical island surrounded by turquoise ocean water"
        />
        <div class="hero-overlay">
          <h1>Islands of the Grand Line</h1>
          <p class="hero-sub">Every island holds a story &mdash; and a new challenge</p>
        </div>
      </div>
      <div class="page-body">
        <p>
          The world of <em>One Piece</em> is defined by its islands, each with a distinct
          culture, climate, and conflict waiting to be resolved. <strong>Alabasta</strong>
          is a vast desert kingdom torn apart by civil war and the scheming of the
          Warlord Crocodile. <strong>Skypiea</strong> floats impossibly high above the
          clouds, a sky island guarded by a self-proclaimed god. <strong>Water 7</strong>
          is a city built on canals, home to the master shipwrights of the Galley-La
          Company and the site of one of the crew&rsquo;s most heartbreaking trials.
          <strong>Marineford</strong> is the Marine headquarters where one of the most
          catastrophic battles in the series&rsquo; history was waged. And
          <strong>Wano Country</strong>, a samurai nation sealed off from the world,
          became the stage for an epic war to liberate an entire people from the grip
          of the Yonko Kaido. Each island is a world unto itself.
        </p>
        <div class="fact-bar">
          <div class="fact">
            <strong>4</strong>
            <span>Major seas in the world</span>
          </div>
          <div class="fact">
            <strong>20+</strong>
            <span>Major story arcs across the series</span>
          </div>
          <div class="fact">
            <strong>Red Line</strong>
            <span>The single continent that circles the globe</span>
          </div>
        </div>
      </div>
    </section>
  `,

  devilfruits: `
    <section class="page">
      <div class="page-hero">
        <img
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=1200&auto=format&fit=crop"
          alt="Vibrant colorful tropical fruits arranged on a surface"
        />
        <div class="hero-overlay">
          <h1>Devil Fruits</h1>
          <p class="hero-sub">Incredible power &mdash; at the cost of the sea itself</p>
        </div>
      </div>
      <div class="page-body">
        <p>
          Devil Fruits are mysterious and rare fruits found throughout the world of
          <em>One Piece</em> that grant the person who eats them an extraordinary
          superhuman ability. The price is permanent: the eater loses the ability to
          swim and becomes weakened by seawater &mdash; a dangerous curse for anyone
          living on the ocean. There are three known categories. <strong>Paramecia</strong>
          types grant a wide range of powers that alter the user&rsquo;s body or
          environment, such as Luffy&rsquo;s rubber body or Trafalgar Law&rsquo;s
          ability to create a surgical &ldquo;Room.&rdquo; <strong>Zoan</strong> types
          allow the user to transform into an animal or hybrid form, granting physical
          might and instinct. <strong>Logia</strong> types &mdash; the rarest and most
          feared &mdash; allow the user to transform their body into a natural element
          like fire, ice, or light, making them nearly untouchable. Among them all, the
          legendary <strong>Mythical Zoan</strong> and <strong>Ancient Zoan</strong>
          types stand as some of the most powerful abilities in existence.
        </p>
        <div class="fact-bar">
          <div class="fact">
            <strong>3</strong>
            <span>Types: Paramecia, Zoan, Logia</span>
          </div>
          <div class="fact">
            <strong>Logia</strong>
            <span>Rarest and most coveted type</span>
          </div>
          <div class="fact">
            <strong>Haki</strong>
            <span>The only reliable counter to Logia powers</span>
          </div>
        </div>
      </div>
    </section>
  `,
};

const contentArea = document.querySelector("#content");
const navLinks = document.querySelectorAll(".nav-link");

function loadPage(pageId) {
  contentArea.innerHTML = pages[pageId];

  navLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  document.querySelector("#" + pageId).classList.add("active");
}

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    loadPage(link.id);
  });
});

loadPage("home");
