import { notFound } from "next/navigation";
import { clients } from "@/clients.config";
import Script from "next/script";

interface Props {
  params: { client: string };
}

export function generateStaticParams() {
  return Object.keys(clients).map((client) => ({ client }));
}

export function generateMetadata({ params }: Props) {
  const config = clients[params.client];
  if (!config) return {};

  return {
    title: `${config.name} | Design Groove Tools`,
  };
}

export default function ClientPage({ params }: Props) {
  const config = clients[params.client];

  if (!config) {
    notFound();
  }

  const formUrl = `https://api.leadconnectorhq.com/widget/form/${config.formId}`;
  const iframeId = `inline-${config.formId}`;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/logo.svg" alt="Design Groove" className="h-10" />
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <iframe
            src={formUrl}
            style={{
              width: "100%",
              height: config.formHeight || 627,
              border: "none",
              borderRadius: "3px",
            }}
            id={iframeId}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="One Click Marketing Campaign Form"
            data-height={config.formHeight || 627}
            data-layout-iframe-id={iframeId}
            data-form-id={config.formId}
            title="One Click Marketing Campaign Form"
          />
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          {config.name} Partner Portal
        </p>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
