import FooterComponent from "@/app/components/Footer";
import HeaderComponent from "@/app/components/Header";

export default function PrivacyPolicy() {
    return (
        <>
            {/* Header */}
            <HeaderComponent />
            <main className="flex-grow flex flex-col items-center justify-center mt-16 mx-auto max-width-90">

            <div className="mb-32 mt-16">
                <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Wetrocloud Data Protection and Privacy Policy</h1>
                <p className="italic text-gray-400 mb-6">Last Updated: 21st, February, 2025</p>
                <p className="mb-6">
                    This Data Protection and Privacy Policy ("Policy") outlines how Wetrocloud, Inc. ("we," "our," or "us") collects,
                    uses, stores, and protects your data when you use our API products and services.
                </p>
        
                <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
                <h3 className="text-xl font-semibold mb-2">Types of Data Collected:</h3>
                <p className="mb-4">We collect various forms of data to provide our Service, including:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-semibold">Text:</span> User-submitted text inputs.</li>
                    <li><span className="font-semibold">Audio:</span> Audio files uploaded by users.</li>
                    <li><span className="font-semibold">Documents:</span> Files such as DOCs, PDFs, Sheets.</li>
                    <li><span className="font-semibold">Web Pages & YouTube Videos:</span> URLs provided for content extraction.</li>
                    <li><span className="font-semibold">Other Data:</span> Any other data necessary for generating vector embeddings and processing queries.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Data Storage and Processing</h2>
                <h3 className="text-xl font-semibold mb-2">Data Storage:</h3>
                <p className="mb-4">
                We do not store your original resource files. Instead, we process these resources by converting them into vector embeddings, which are stored in our database. We do not store chat histories or the raw files themselves.
                </p>
                
                <h3 className="text-xl font-semibold mb-2">Data Processing:</h3>
                <p className="mb-4">Your data is processed through a series of steps:</p>
                <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Chunking:</span> The resource is divided into manageable segments.</li>
                <li><span className="font-semibold">Embedding Generation:</span> These chunks are converted into vector embeddings.</li>
                <li><span className="font-semibold">Query Processing:</span> When a query is made, relevant vector chunks, along with the user’s query and a system prompt, are passed to our LLM to generate a refined response.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">Data Retention:</h3>
                <p className="mb-6">
                Vector embeddings are stored permanently to improve response accuracy over time. However, we routinely delete embeddings deemed unimportant or outdated, in accordance with our internal data retention policies.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. User Rights and Intellectual Property</h2>
                <h3 className="text-xl font-semibold mb-2">Ownership:</h3>
                <p className="mb-4">
                All data provided by users and content generated through the API is owned by the user. Wetrocloud retains ownership of the underlying technology and processes.
                </p>

                <h3 className="text-xl font-semibold mb-2">User Rights:</h3>
                <p className="mb-6">
                Users have the right to request information about the data we process, request corrections, or request deletion of data in accordance with applicable laws.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Security Measures</h2>
                <h3 className="text-xl font-semibold mb-2">Protection Protocols:</h3>
                <p className="mb-4">
                We employ robust security measures, including encryption and secure access protocols, to protect your data during transmission and storage.
                </p>

                <h3 className="text-xl font-semibold mb-2">Breach Notification:</h3>
                <p className="mb-6">
                In the unlikely event of a data breach, we have procedures in place to promptly notify users and take corrective action, in compliance with legal obligations.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Compliance with Data Protection Laws</h2>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance:</h3>
                <p className="mb-4">
                Wetrocloud adheres to data protection regulations such as the GDPR, CCPA, and other relevant legislation. We continuously review and update our practices to ensure compliance.
                </p>

                <h3 className="text-xl font-semibold mb-2">Jurisdiction:</h3>
                <p className="mb-6">
                Your data is processed under the jurisdiction of the United States of America, and any disputes related to data protection will be governed by the laws applicable therein.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Support and Contact</h2>
                <h3 className="text-xl font-semibold mb-2">Contact Information:</h3>
                <p className="mb-4">
                For any questions regarding this Policy or your data, please contact us at:
                </p>
                <p className="mb-2"><span className="font-semibold">Email:</span> hello@wetrocloud.com</p>
                <p className="mb-6"><span className="font-semibold">Social Media:</span> @wetrocloud on all social media channels</p>

                </div>
            </div>

            </main>
            {/* Footer component */}
            <FooterComponent />

        </>
    );
}