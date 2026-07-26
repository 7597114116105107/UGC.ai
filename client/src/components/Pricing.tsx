import Title from './Title';

const plans = [
    {
        name: 'Starter',
        price: 'Free',
        description: 'For individuals exploring short-form content creation.',
        features: ['5 AI generations/day', 'Basic templates', 'Community access'],
        highlighted: false,
    },
    {
        name: 'Pro',
        price: '$9',
        description: 'For creators who want faster output and premium assets.',
        features: ['Unlimited generations', 'Priority rendering', 'Advanced editing tools'],
        highlighted: true,
    },
    {
        name: 'Studio',
        price: '$29',
        description: 'For teams building branded content at scale.',
        features: ['Team workspace', 'Custom brand kits', 'Dedicated support'],
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Pricing"
                    heading="Pricing Plans"
                    description="Our pricing plans are designed to scale with your business needs."
                />

                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-2xl border p-6 ${plan.highlighted ? 'border-violet-500/50 bg-violet-500/10 shadow-lg shadow-violet-500/10' : 'border-white/10 bg-white/5'}`}
                        >
                            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                            <p className="mt-3 text-sm text-gray-400">{plan.description}</p>
                            <div className="mt-6 flex items-end gap-1">
                                <span className="text-4xl font-semibold text-white">{plan.price}</span>
                                <span className="text-gray-400">/ month</span>
                            </div>
                            <ul className="mt-6 space-y-2 text-sm text-gray-300">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <span className="text-violet-400">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-medium transition ${plan.highlighted ? 'bg-violet-500 text-white hover:bg-violet-400' : 'bg-white/10 text-gray-100 hover:bg-white/20'}`}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}