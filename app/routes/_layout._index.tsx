import { useState } from "react";
import { Badges } from "~/components/badges";
import { Button } from "~/components/button";
import { Checkbox } from "~/components/inputs/checkbox";

export default function Index() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex gap-4 items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="link">Link</Button>
        <Button variant="link" active={true} nav={true}>
          Link active nav
        </Button>
        <Button variant="link" active={true}>
          Link active filter
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <Checkbox id="test" />
        <Checkbox id="test 2" defaultChecked={true} />
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-center">
          <Badges variant="base">Label</Badges>
          <Badges variant="base" icon={true}>
            Label
          </Badges>
        </div>

        <div className="flex gap-4 items-center">
          <Badges variant="info">Label</Badges>
          <Badges variant="info" icon={true}>
            Label
          </Badges>
        </div>

        <div className="flex gap-4 items-center">
          <Badges variant="error">Label</Badges>
          <Badges variant="error" icon={true}>
            Label
          </Badges>
        </div>

        <div className="flex gap-4 items-center">
          <Badges variant="warning">Label</Badges>
          <Badges variant="warning" icon={true}>
            Label
          </Badges>
        </div>

        <div className="flex gap-4 items-center">
          <Badges variant="success">Label</Badges>
          <Badges variant="success" icon={true}>
            Label
          </Badges>
        </div>
      </div>
    </div>
  );
}

/* const QS_PRODUCT: QS_PRODUCT_TYPE = {
    sort: ["name:asc"],
    populate: {
      image: {
        fields: [
          "name",
          "alternativeText",
          "caption",
          "width",
          "height",
          "hash",
          "ext",
          "mime",
          "size",
          "url",
          "previewUrl",
          "provider",
          "provider_metadata",
          "createdAt",
          "updatedAt",
        ],
      },
    },
    pagination: {
      start: from,
      limit: to,
    },
  };

  if (paramCategory)
    QS_PRODUCT.filters = { category: { $eq: paramCategory.toLowerCase() } };

  if (q && !QS_PRODUCT.filters) QS_PRODUCT.filters = { name: { $contains: q } };

  if (q && QS_PRODUCT.filters) QS_PRODUCT.filters.name = { $contains: q };

  console.log(QS_PRODUCT);

  const QS_QUERY = qs.stringify(QS_PRODUCT, {
    encodeValuesOnly: true,
  });

  const urlProducts = `http://localhost:1337/api/products?locale=en${QS_QUERY}`;
  const responseProducts = await fetch(urlProducts);
  const strapiProducts = await responseProducts.json();

  console.log(strapiProducts.data); */
