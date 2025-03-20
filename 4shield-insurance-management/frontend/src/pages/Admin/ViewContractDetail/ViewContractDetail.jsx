import React, { useState } from 'react';
import { Download, Edit, FileSignature } from 'lucide-react';

const ViewContractDetail = () => {
    const [showSignDialog, setShowSignDialog] = useState(false);
    const [fullName, setFullName] = useState('');

    const handleDownload = () => {
        // In a real application, this would trigger a PDF download
        console.log('Downloading contract as PDF');
        // Implementation would depend on your backend setup
    };

    const handleESign = () => {
        setShowSignDialog(true);
    };

    const handleConfirmSign = () => {
        if (fullName.trim()) {
            console.log(`Contract signed by: ${fullName}`);
            setShowSignDialog(false);
            // In a real app, you would send this signature to your backend
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Contract Header */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">HOMEOWNERS INSURANCE POLICY</h1>
                <div className="flex justify-center space-x-6 text-sm">
                    <p><span className="font-semibold">Policy Number:</span> H-2024-00123</p>
                    <p><span className="font-semibold">Effective Date:</span> January 1, 2024</p>
                    <p><span className="font-semibold">Expiration Date:</span> December 31, 2024</p>
                </div>
            </div>

            {/* Policy Introduction */}
            <div className="mb-6 text-sm">
                <p>This Homeowners Insurance Policy ("Policy") is a legally binding agreement between the policyholder and the insurance company. It outlines the terms, conditions, rights, and responsibilities of both parties. Please read this Policy carefully to understand your coverage, obligations, and benefits.</p>
            </div>

            {/* Contract Sections */}
            <div className="space-y-6 mb-8">
                {/* Section 1 */}
                <section>
                    <h2 className="text-lg font-bold mb-2">1. GENERAL INFORMATION</h2>
                    <div className="pl-4 space-y-3 text-sm">
                        <div>
                            <p className="font-semibold">Policyholder:</p>
                            <p className="pl-4">Name: John Doe</p>
                            <p className="pl-4">Address: 123 Main Street, Springfield, IL 62704</p>
                            <p className="pl-4">Phone Number: (555) 123-4567</p>
                        </div>

                        <div>
                            <p className="font-semibold">Insurance Company:</p>
                            <p className="pl-4">Name: FourShield Insurance Company</p>
                            <p className="pl-4">Address: 456 Insurance Lane, Chicago, IL 60601</p>
                            <p className="pl-4">Phone Number: (555) 987-6543</p>
                        </div>

                        <div>
                            <p className="font-semibold">Insurance Agent (if applicable):</p>
                            <p className="pl-4">Name: Jane Smith</p>
                            <p className="pl-4">Address: 789 Agent Avenue, Springfield, IL 62704</p>
                            <p className="pl-4">Phone Number: (555) 456-7890</p>
                        </div>

                        <div>
                            <p className="font-semibold">Property Information:</p>
                            <p className="pl-4">Address: 123 Main Street, Springfield, IL 62704</p>
                            <p className="pl-4">Description: A single-family, two-story house with a detached garage and personal property, including furniture, electronics, and clothing.</p>
                            <p className="pl-4">Estimated Value: $350,000</p>
                        </div>

                        <div>
                            <p className="font-semibold">Policy Period:</p>
                            <p className="pl-4">This Policy is effective from January 1, 2024, to December 31, 2024.</p>
                        </div>

                        <div>
                            <p className="font-semibold">Coverage Amount:</p>
                            <p className="pl-4">The maximum amount the insurance company will pay in the event of a covered loss is $350,000.</p>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section>
                    <h2 className="text-lg font-bold mb-2">2. COVERED PERILS</h2>
                    <div className="pl-4 space-y-3 text-sm">
                        <div>
                            <p className="font-semibold">List of Covered Perils:</p>
                            <p className="pl-4">This Policy covers the following risks: Fire, Windstorm, Flood, Earthquake, Theft, Vandalism, Lightning strikes, Hail damage</p>
                        </div>

                        <div>
                            <p className="font-semibold">Exclusions:</p>
                            <p className="pl-4">The following risks are not covered under this Policy:</p>
                            <ul className="list-disc pl-8">
                                <li>Normal wear and tear</li>
                                <li>Damage caused by poor maintenance</li>
                                <li>Damage from pests (e.g., termites, rodents)</li>
                                <li>Damage caused by war or nuclear hazards</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section>
                    <h2 className="text-lg font-bold mb-2">3. POLICYHOLDER'S RIGHTS</h2>
                    <div className="pl-4 space-y-3 text-sm">
                        <div>
                            <p className="font-semibold">Conditions for Coverage:</p>
                            <p className="pl-4">To receive benefits under this Policy, the policyholder must:</p>
                            <ul className="list-disc pl-8">
                                <li>Pay premiums on time.</li>
                                <li>Notify the insurance company promptly of any loss.</li>
                                <li>Provide accurate and complete information when filing a claim.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Claims Process:</p>
                            <p className="pl-4">To file a claim, the policyholder must:</p>
                            <ul className="list-disc pl-8">
                                <li>Notify the insurance company immediately after a loss occurs.</li>
                                <li>Submit a completed claim form and all required documentation, including photos of the damage and a police report (if applicable).</li>
                                <li>Cooperate with the insurance company's investigation.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Claim Processing Time:</p>
                            <p className="pl-4">The insurance company will process claims within 30 business days of receiving all required documentation.</p>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section>
                    <h2 className="text-lg font-bold mb-2">4. POLICYHOLDER'S DUTIES</h2>
                    <div className="pl-4 space-y-3 text-sm">
                        <div>
                            <p className="font-semibold">Reporting a Loss:</p>
                            <p className="pl-4">The policyholder must notify the insurance company of any loss within 48 hours of the event.</p>
                        </div>

                        <div>
                            <p className="font-semibold">Protecting the Property:</p>
                            <p className="pl-4">The policyholder must take reasonable steps to protect the property from further damage after a loss, such as covering broken windows or tarping a damaged roof.</p>
                        </div>

                        <div>
                            <p className="font-semibold">Providing Accurate Information:</p>
                            <p className="pl-4">The policyholder must provide the insurance company with all necessary information to process a claim, including proof of ownership and repair estimates.</p>
                        </div>
                    </div>
                </section>

                {/* Section 5 */}
                <section>
                    <h2 className="text-lg font-bold mb-2">5. PREMIUMS</h2>
                    <div className="pl-4 space-y-3 text-sm">
                        <div>
                            <p className="font-semibold">Premium Amount:</p>
                            <p className="pl-4">The total annual premium for this Policy is $1,200.</p>
                        </div>

                        <div>
                            <p className="font-semibold">Payment Method:</p>
                            <p className="pl-4">Premiums can be paid monthly via credit card, bank transfer, or check.</p>
                        </div>

                        <div>
                            <p className="font-semibold">Premium Adjustment Conditions:</p>
                            <p className="pl-4">The premium may be adjusted under the following circumstances:</p>
                            <ul className="list-disc pl-8">
                                <li>Changes in the property's value.</li>
                                <li>Changes in coverage.</li>
                                <li>Increases in local construction costs.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 6 */}
                <section>
                    <h2 className="text-lg font-bold mb-2">6. GENERAL CONDITIONS</h2>
                    <div className="pl-4 space-y-3 text-sm">
                        <div>
                            <p className="font-semibold">Policy Cancellation:</p>
                            <p className="pl-4">This Policy may be canceled by either party with 30 days' written notice.</p>
                        </div>

                        <div>
                            <p className="font-semibold">Dispute Resolution:</p>
                            <p className="pl-4">Any disputes arising under this Policy will be resolved through arbitration in accordance with the laws of the State of Illinois.</p>
                        </div>

                        <div>
                            <p className="font-semibold">Governing Law:</p>
                            <p className="pl-4">This Policy is governed by the laws of the State of Illinois.</p>
                        </div>
                    </div>
                </section>

                {/* Section 7 */}
                <section>
                    <h2 className="text-lg font-bold mb-2">7. ADDITIONAL PROVISIONS</h2>
                    <div className="pl-4 space-y-3 text-sm">
                        <div>
                            <p className="font-semibold">Additional Coverage:</p>
                            <p className="pl-4">The policyholder may purchase additional coverage for high-value items, such as jewelry or art, at an additional cost.</p>
                        </div>

                        <div>
                            <p className="font-semibold">Deductible:</p>
                            <p className="pl-4">The policyholder is responsible for paying a deductible of $1,000 before the insurance company begins to pay for a covered loss.</p>
                        </div>
                    </div>
                </section>

                {/* Note */}
                <section className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-lg font-bold mb-2">NOTE:</h2>
                    <div className="pl-4 space-y-2 text-sm">
                        <p><span className="font-semibold">Read the Policy Carefully:</span> Before signing, carefully review all provisions to understand your rights and obligations.</p>
                        <p><span className="font-semibold">Ask for Clarification:</span> If any provision is unclear, contact your insurance agent for clarification.</p>
                        <p><span className="font-semibold">Keep a Copy:</span> Retain a copy of this Policy for your records.</p>
                        <p><span className="font-semibold">Expert Advice:</span> To ensure your interests are fully protected, consult with an insurance agent or attorney to understand your Policy and select the coverage that best meets your needs.</p>
                    </div>
                </section>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
                <button
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => console.log('Edit contract clicked')}
                >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Contract
                </button>

                <button
                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    onClick={handleESign}
                >
                    <FileSignature className="w-4 h-4 mr-2" />
                    E-Sign Contract
                </button>

                <button
                    className="flex items-center bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                    onClick={handleDownload}
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download Contract
                </button>
            </div>

            {/* E-Sign Dialog */}
            {showSignDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                        <h3 className="text-lg font-bold mb-4">E-Sign Document</h3>
                        <p className="mb-4">Please enter your full name to electronically sign this contract:</p>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Full Name"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                onClick={() => setShowSignDialog(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                onClick={handleConfirmSign}
                            >
                                Confirm Signature
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewContractDetail;