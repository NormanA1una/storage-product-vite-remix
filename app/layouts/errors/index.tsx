import { Link, isRouteErrorResponse, useNavigate } from "@remix-run/react";

type ErrorHandlerProps = {
  error: unknown;
};

export default function ErrorHandler({ error }: ErrorHandlerProps) {
  const navigate = useNavigate();

  const isError = isRouteErrorResponse(error);

  return (
    <>
      <div className="bg-[#EEE7D9] h-dvh p-4 dark:bg-[#1E1D2B] dark:bg-gradient-to-tr from-[#161719] via-[#161719] to-[#2F2234]">
        {isError && error.status === 404 ? (
          <main className="text-center h-full flex items-center justify-center">
            <section className="flex flex-col gap-8 dark:text-[#FFFF]">
              <div className="text-9xl">🏝️</div>
              <p className="text-3xl font-bold">Ups! Creo que te perdiste</p>
              <p>
                Regresar al{" "}
                <Link className=" text-blue-600" to={"/"}>
                  Catálogo de productos
                </Link>{" "}
                🔙
              </p>
            </section>
          </main>
        ) : (
          <main className="text-center h-full flex items-center justify-center">
            <section className="flex flex-col gap-8 dark:text-[#FFFF]">
              <div className="text-7xl">😵‍💫</div>
              <p className="text-3xl font-bold">¡Algo salió mal!</p>
              <div>
                <button
                  className=" bg-[#AF503B] p-2 rounded-md text-[#fefefe] hover:bg-[#493326] dark:bg-[#5C77EC] dark:hover:bg-[#0D1321]"
                  onClick={() => navigate("/")}
                >
                  ¡Intenta nuevamente!
                </button>
              </div>
            </section>
          </main>
        )}
      </div>
    </>
  );
}
