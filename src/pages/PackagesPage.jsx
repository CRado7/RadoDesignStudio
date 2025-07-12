export default function PackagesPage() {
    return (
        <div className="packages-page">
            <h1>Pricing Packages</h1>
            <p>We offer a range of packages to suit your needs. Choose the one that fits you best:</p>
            <ul>
                <li>
                    <h2>Basic Package</h2>
                    <p>Includes essential services for startups.</p>
                    <p>Price: $99/month</p>
                </li>
                <li>
                    <h2>Standard Package</h2>
                    <p>Offers additional features for growing businesses.</p>
                    <p>Price: $199/month</p>
                </li>
                <li>
                    <h2>Premium Package</h2>
                    <p>Comprehensive solutions for established enterprises.</p>
                    <p>Price: $299/month</p>
                </li>
            </ul>
        </div>
    );
}