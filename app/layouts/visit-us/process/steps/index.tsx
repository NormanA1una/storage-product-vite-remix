import { css } from "@emotion/css";
import { Paragraph } from "~/components/typography/paragraph";

const STEPS_DATA = [
  {
    icon: "/images/step1-icon.svg",
    title: "Seleccioná tus productos",
    description:
      "Navegá por nuestro catálogo y elegí los productos que querés. Agregalos a tu carrito con un solo clic.",
  },
  {
    icon: "/images/step2-icon.svg",
    title: "Revisa tu selección",
    description:
      "Una vez que hayas seleccionado todo lo que necesitas, revisá tu carrito para asegurarte de que todo esté en orden. Aquí podés ajustar las cantidades si lo necesitás.",
  },
  {
    icon: "/images/step3-icon.svg",
    title: "Elegí tu método de entrega",
    description:
      "Decidí cómo querés recibir tus productos. Podés optar por pickup en nuestra tienda o delivery dentro de Granada.",
  },
  {
    icon: "/images/step4-icon.svg",
    title: "Confirmá el total a pagar",
    description:
      "Verificá el monto total de tu compra, incluyendo cualquier costo adicional según el método de entrega que elegiste.",
  },
  {
    icon: "/images/step5-icon.svg",
    title: "Finalizá tu pedido en WhatsApp",
    description:
      "Hacé clic en el botón para completar tu compra. Serás redirigido a nuestro WhatsApp, donde se enviará automáticamente la lista de productos que seleccionaste.",
  },
  {
    icon: "/images/step6-icon.svg",
    title: "¡Nosotros te atenderemos!",
    description:
      "Nuestro equipo te atenderá de inmediato para coordinar la entrega y el pago.",
  },
];

export const InstructionSteps = () => {
  const intructionsStyles = {
    container: css({
      display: "grid",
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
      justifyItems: "center",
      maxWidth: "1100px",
      margin: "0px auto",
      rowGap: "20px",

      "@media(min-width: 1024px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 0,
      },

      "@media(min-width: 1280px)": {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      },
    }),

    stepContainer: css({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "@media(min-width: 1024px)": {
        flexDirection: "row",
        alignItems: "flex-start",
      },
    }),

    stepContent: css({
      maxWidth: "246px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      alignItems: "center",
      marginBottom: "10px",
    }),

    textContainer: css({
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }),

    lineMobileContainer: (i: number) =>
      css({
        display: "flex",
        justifyContent: "center",
        margin: "32px 0px 0px 0px",
        "@media(min-width: 1024px)": {
          display: i % 2 === 0 ? "block" : "none",
          position: "absolute",
          top: "50px",
          right: "-122px",
          transform: "translateY(-50%) rotate(-90deg)",
        },
        "@media(min-width: 1280px)": {
          display: "none",
        },
      }),

    lineDotted: css({
      "@media(min-width: 1024px)": {
        width: "auto",
        height: "100px",
      },
    }),

    lineBigContainer: (i: number) =>
      css({
        display: "none",
        justifyContent: "center",
        margin: "32px 0px 0px 0px",
        position: "absolute",
        right: -162,
        top: 33,

        "@media(min-width: 1280px)": {
          display: [0, 1, 3, 4].includes(i) ? "block" : "none",
        },
      }),

    lineDottedDesktop: css({
      "@media(min-width: 1024px)": {
        width: "210px",
        height: "11px",
      },
    }),
  };
  return (
    <div className={intructionsStyles.container}>
      {STEPS_DATA.map((step, i) => {
        return (
          <div key={i} className={intructionsStyles.stepContainer}>
            <div className={intructionsStyles.stepContent}>
              {/* img */}
              <div>
                <img src={step.icon} alt={step.title} />
              </div>

              {/* texts */}
              <div className={intructionsStyles.textContainer}>
                <div>
                  <Paragraph weight="semi-bold" variant="2xl">
                    {step.title}
                  </Paragraph>
                </div>

                <div>
                  <Paragraph weight="regular" variant="md">
                    {step.description}
                  </Paragraph>
                </div>
              </div>
            </div>
            {i < STEPS_DATA.length - 1 && (
              <>
                <div className={intructionsStyles.lineMobileContainer(i)}>
                  <img
                    src={`/images/line-dotted-${i + 1}.svg`}
                    alt="Línea entre pasos"
                    className={intructionsStyles.lineDotted}
                  />
                </div>
                <div className={intructionsStyles.lineBigContainer(i)}>
                  <img
                    src={`/images/line-big-${
                      [1, 2, 4, 5][[0, 1, 3, 4].indexOf(i)] || 1
                    }.svg`}
                    alt="Línea entre pasos"
                    className={intructionsStyles.lineDottedDesktop}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
