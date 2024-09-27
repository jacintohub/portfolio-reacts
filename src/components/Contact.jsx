import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="p-10 max-w-[1000px] mx-auto bg-gradient-to-r from-[#1f1c2c] to-[#928DAB] rounded-xl shadow-lg grid md:grid-cols-2 gap-10 place-items-center"
      id="contact"
    >
      {/* Informações de Contato */}
      <ul className="my-auto space-y-8">
        <li className="flex items-center">
          <AiFillLinkedin className="w-[70px] h-auto text-sky-400 transition-transform transform hover:scale-110 duration-300" />
          <div className="ml-5">
            <h3 className="text-xl font-bold text-gray-100">Contato</h3>
            <p className="text-gray-300">WhatsApp: XXX</p>
            <p className="text-gray-300">E-mail: XXX</p>
          </div>
        </li>

        <li className="flex items-center">
          <AiFillGithub className="w-[70px] h-auto text-gray-400 transition-transform transform hover:scale-110 duration-300" />
          <div className="ml-5">
            <h3 className="text-xl font-bold text-gray-100">
              Horário de Trabalho
            </h3>
            <p className="text-gray-300">Seg-Sex: 10h - 17h</p>
          </div>
        </li>
      </ul>

      {/* Formulário de Contato */}
      <form
        action="https://getform.io/f/bolgelea"
        method="POST"
        className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300"
        id="form"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Entre em Contato
        </h2>

        <input
          type="text"
          id="name"
          placeholder="Seu Nome"
          name="name"
          className="mb-4 w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#50a7c7] transition-shadow duration-300"
        />

        <input
          type="email"
          id="email"
          placeholder="Seu E-mail"
          name="email"
          className="mb-4 w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#50a7c7] transition-shadow duration-300"
        />

        <textarea
          id="textarea"
          cols="30"
          rows="4"
          placeholder="Sua Mensagem"
          name="message"
          className="mb-4 w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#50a7c7] transition-shadow duration-300"
        ></textarea>

        <button className="w-full py-3 rounded-md text-white font-semibold text-xl bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] hover:bg-gradient-to-l transition-all duration-300 hover:shadow-xl focus:outline-none">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Contact;
