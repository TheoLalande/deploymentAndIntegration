"use client";

import { areFieldsValid } from "../utils/validation";
import { subYears } from "date-fns";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [surName, setSurName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [adult, setAdult] = useState<boolean>(true);

  useEffect(() => {
    if (
      areFieldsValid(name, adresse, postCode, surName, email, adult, startDate)
    ) {
      setError(false);
    } else {
      setError(true);
    }
  }, [name, email, surName, adult, adresse, postCode, startDate, setError]);

  useEffect(() => {
    if (startDate) {
      const [year, month, day] = startDate.split("-").map((el) => parseInt(el));
      const birthDayDate = new Date(year, month, day);
      const adultDate = subYears(new Date(), 18);
      setAdult(birthDayDate <= adultDate);
    }
  }, [startDate]);

  const handleSubmit = () => {
    toast.success("Inscription réussie !");
    setName("");
    setEmail("");
    setSurName("");
    setStartDate("");
    setAdresse("");
    setPostCode("");
  };

  return (
    <form autoComplete="off">
      <div className="flex flex-col bg-base-200  shadow-sm p-4 md:p-7 md:px-14 shadow-secondary gap-3">
        <div className="flex flex-col gap-3">
          {/* Name, DATE, HOURLY */}
          <div className="flex gap-5 flex-col justify-start bg-base-200 p-4  mb-6 md:mb-11 shadow shadow-secondary">
            <div className="max-md:flex justify-center items-center md:ml-2">
              <p className="text-sm text-secondary">Inscription</p>
            </div>
            <div>
              {/* Name */}
              <label className="input input-bordered input-sm input-secondary bg-base-300 flex items-center gap-2">
                <div className="text-accent"></div>
                <input
                  type="text"
                  placeholder="Nom"
                  required={true}
                  maxLength={25}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <p className="text-error">
                {name &&
                  !/^[a-zA-ZÀ-ÿ\s'-]+$/.test(name) &&
                  "Le nom est invalide."}
              </p>
            </div>
            <div>
              {/* Name */}
              <label className="input input-bordered input-sm input-secondary bg-base-300 flex items-center gap-2">
                <div className="text-accent"></div>
                <input
                  type="text"
                  placeholder="Prénom"
                  required={true}
                  maxLength={25}
                  value={surName}
                  onChange={(event) => setSurName(event.target.value)}
                />
              </label>
              <p className="text-error">
                {surName &&
                  !/^[a-zA-ZÀ-ÿ\s'-]+$/.test(surName) &&
                  "Le prénom est invalide."}
              </p>
            </div>
            <div>
              {/* Email */}
              <label className="input input-bordered input-sm input-secondary bg-base-300 flex items-center gap-2">
                <div className="text-accent"></div>
                <input
                  type="email"
                  placeholder="Email"
                  required={true}
                  maxLength={40}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <p className="text-error">
                {email &&
                  !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    email
                  ) &&
                  "L'email est invalide."}
              </p>
            </div>
            <div>
              {/* DATE */}
              <label className="input input-bordered input-sm input-secondary bg-base-300 flex items-center gap-2">
                <div className="text-accent"></div>
                <input
                  aria-label="Date"
                  type="date"
                  onChange={(event) => setStartDate(event.target.value)}
                  required={true}
                />
              </label>
              <p className="text-error">
                {startDate &&
                  !adult &&
                  "Vous devez être majeur pour vous inscrire."}
              </p>
            </div>
            {/* Adresse */}
            <label className="input input-bordered input-sm input-secondary bg-base-300 flex items-center gap-2">
              <div className="text-accent"></div>
              <input
                type="text"
                placeholder="Adresse"
                required={true}
                maxLength={100}
                value={adresse}
                onChange={(event) => setAdresse(event.target.value)}
              />
            </label>

            {/* Code Postal */}
            <label className="input input-bordered input-sm input-secondary bg-base-300 flex items-center gap-2">
              <div className="text-accent"></div>
              <input
                type="text"
                placeholder="Code postal"
                required={true}
                maxLength={5}
                pattern="\d{5}"
                title="Le code postal doit être composé de 5 chiffres"
                value={postCode}
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^\d{0,5}$/.test(value)) {
                    // Permet uniquement les chiffres et un max de 5 caractères
                    setPostCode(value);
                  }
                }}
              />
            </label>
          </div>
        </div>
        <div>
          <button
            disabled={error}
            type="button"
            className="btn btn-secondary w-full"
            onClick={handleSubmit}
          >
            Valider
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
