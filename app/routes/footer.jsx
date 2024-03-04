export default function Footer() {
    return (
      <footer className="bg-beige-200 py-8 text-center">
        <div>
          <h3 className="text-xl font-semibold">Kontaktinformation</h3><br></br>
          <p className="text-gray-700 font-semibold">Søs Wind</p>
          <p>
            Mail:{" "}
            <a className="text-brown-500 underline" href="mailto:s_swind@hotmail.com">
              s_swind@hotmail.com
            </a>
          </p>
          <p>
            Telefon:{" "}
            <a className="text-brown-500 underline" href="tel:+4524466692">
              +45 2446 6692
            </a>
          </p>
          <p className="text-gray-700">8200 Aarhus N</p>
        </div>
      </footer>
    );
  }
  