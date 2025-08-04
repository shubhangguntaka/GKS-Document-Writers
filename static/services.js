// Service details data with image paths
const serviceDetails = {
    legal: {
        title: 'Legal Document Drafting',
        img: '/static/files/legal.jpg',
        html: `<p>We draft a variety of legal documents including Sale Deeds, Wills, Power of Attorney, Agreements, and more. Our team ensures all documents are legally compliant and tailored to your needs.</p>
    <strong>Requirements:</strong>
    <ul><li>Valid ID proof of all parties</li><li>Property documents (if applicable)</li><li>Every document relating to the property</li></ul>
    <strong>Instructions:</strong>
    <ol><li>Contact us with your requirements.</li><li>Submit necessary documents physically.</li><li>Review draft and provide feedback.</li><li>Finalize and collect your document.</li></ol>`
    },
    marriage: {
        title: 'Hindu Marriage Registration',
        img: '/static/files/marriage-1.jpg',
        html: `<div class="marriage-summary">
        <h3>REQUIREMENTS</h3>
        <p>(Always it is better to take Original and latest copies)</p>
        <ol>
            <li>Bride’s minimum age at the time of solemnization of marriage must be 18 years (completed).</li>
            <li>Bridegroom’s minimum age at the time of solemnization of marriage must be 21 years (completed).</li>
            <li>Bride and Bridegroom AADHAR CARD.</li>
            <li>Copies of SSC Certificates of wife and husband or passport copies (for Date of Birth proof).</li>
            <li>Wedding invitation card.</li>
            <li>Three photograph of marriage ceremony/traditions capturing both wife and husband.</li>
            <li>Three witnesses to sign in the form & in the register of Registrar office. (Witnesses attend with their Aadhar cards)</li>
        </ol>
        <a class="read-more-btn" href="/marriage-details">Read more</a>
    </div>
    <div class="marriage-details" style="display:none">
        <h3>PRECAUTIONS</h3>
        <ul>
            <li>Check thrice the details filled in the Form. Names of the BRIDE and BRIDE GROOM shall always be tallied with the names given in the passport/SSC and other certificates. Otherwise, at the time of issuance of visa and other certificates, you may have to face problem.</li>
            <li>It is advisable to mention the name of the wife (bride) before and after marriage. (as per your require)</li>
            <li>Check all the details before the issue of certificate and if there are any discrepancies in the names or any other details, immediately bring them to the notice of the Sub Registrar and get them rectified.</li>
            <li>It is advised to take all the precautions and thorough check of the documents during marriage registration itself.</li>
        </ul>
    </div>`
    },
    registration: {
        title: 'Property Registration',
        img: '/static/files/property-registration.jpg',
        html: `<div class="registration-summary">
        <p>We provide end-to-end assistance for property registration, ensuring all legal formalities are completed smoothly.</p>
        <li> Always it is better to take Original and latest copies</li>
        <li>Our team will guide you through the entire process, from document preparation to final registration.</li>
        <li>Preparation of document can be done in English, Telugu.</li>
        <h3>Requirements for Agreement of Sale / Sale Deed / Gift Deed</h3>
        <ul>
            <li>Aadhar Cards, PAN Cards of executants and claimants (Buyer, Seller, Donor, Donee)</li>
            <li>Already Registered Document</li>
            <li>Plot/House site drawing plan</li>
            <li>Permissions, Property Tax Receipts</li>
            <li>Electricity Bill, Water Bill receipts</li>
            <li>Photograph of the site and location with Google Map coordinates</li>
            <li>Two identified witnesses along with their Aadhar Cards</li>
        </ul>
        <a class="read-more-btn" data-service="registration" href="/property-registration">Read more</a>
    </div>
    <div class="service-details" data-service="registration" style="display:none">
        <h2>Requirements for Mortgage / MOTD / Mortgage Release Deeds &amp; etc.</h2>
        <ul>
            <li>Aadhar Cards, PAN Cards of Executants</li>
            <li>Already Registered Document (link document)</li>
            <li>Legal opinion from Bank Legal Adviser</li>
            <li>Two identified witnesses along with their Aadhar Cards</li>
        </ul>
        <h2>General Requirements for Power of Attorney, Partition Deed, Will Deeds, Lease Deeds, etc.</h2>
        <ul>
            <li>Aadhar Cards, PAN Cards of Executants</li>
            <li>Already Registered Document (link document)</li>
            <li>Two identified witnesses along with their Aadhar Cards</li>
            <li>Details of rent (in case of Lease Deed)</li>
        </ul>
        <h3>Additional Information</h3>
        <ul>
            <li>Always keep original documents and latest copies for all transactions.</li>
            <li>Consult a legal expert for any doubts regarding property or documentation.</li>
            <li>Keep all receipts and documents safe for future reference.</li>
            <li>For any assistance, our team is available to guide you through every step of the process.</li>
        </ul>
    </div>`
    },
    lrs: {
        title: 'Pre Registration-LRS 2020',
        img: '/static/files/lrs.jpg',
        html: `<p>Guidance and documentation for Land Regularization Scheme (LRS) 2020 applications.</p>
    <strong>Requirements:</strong>
    <ul><li>Application form</li><li>Proof of ownership</li><li>Site plan/layout</li><li>Relevant government receipts</li></ul>
    <strong>Instructions:</strong>
    <ol><li>Obtain and fill the LRS application form.</li><li>Attach all supporting documents.</li><li>Submit at the designated office or online portal.</li></ol>`
    },
    legalopinion: {
        title: 'Property Legal Opinion',
        img: '/static/files/legal-opinion.jpg',
        html: `<div class="legalopinion-summary">
        <p>Expert legal opinion and verification for property documents and transactions.</p>
        <h3>Required Documents</h3>
        <ul>
            <li>Copies of all link documents (parent documents, sale deeds, gift deeds, etc.)</li>
            <li>Latest Encumbrance Certificate (EC)</li>
            <li>Property Tax Receipts</li>
            <li>Approved Layout/Building Plan (if applicable)</li>
            <li>Identity proof of owner(s) (Aadhar, PAN, etc.)</li>
            <li>Any government permissions or NOCs (if required)</li>
            <li>Other relevant property-related documents</li>
        </ul>
        <h3>Process & Notes</h3>
        <ul>
            <li>Submit all available documents for review.</li>
            <li>We will verify the title, check for encumbrances, and assess compliance with regulations.</li>
            <li>Receive a written legal opinion/report with findings and recommendations.</li>
            <li>Consult us for clarification or further legal assistance if needed.</li>
        </ul>
    </div>`
    },
    translation: {
        title: 'Translation Services',
        img: '/static/files/translation.jpg',
        html: `<p>Certified translation of legal, property, and personal documents between major Indian languages and English.</p>
    <strong>Instructions:</strong>
    <ol><li>Submit the document to be translated.</li><li>Specify target language and any special requirements.</li><li>Collect translated and certified copy.</li></ol>`
    },
    verification: {
        title: 'Document Verification',
        img: '/static/files/verification.jpg',
        html: `<p>Verification of property, legal, and personal documents for authenticity and compliance.</p>
    <strong>Instructions:</strong>
    <ol><li>Provide original and photocopies of documents.</li><li>Verification will be conducted by our experts.</li><li>Receive a verification report.</li></ol>`
    },
    consultation: {
        title: 'Consultation Services',
        img: '/static/files/consultation.jpg',
        html: `<p>Expert advice on legal, property, and documentation matters. Book an appointment for personalized consultation.</p>`
    },
    property: {
        title: 'Property Documentation',
        img: '/static/files/property.jpg',
        html: `<p>Preparation of all types of property-related documents, including sale deeds, gift deeds, and lease agreements.</p>`
    },
    chitfunds: {
        title: 'Registered Chit Funds Information',
        img: '/static/files/chitfunds.jpg',
        html: `<p>Information and documentation support for registered chit funds.</p>`
    },
    stamps: {
        title: 'Stamps Vendors / Notaries / Franking Machine',
        img: '/static/files/stamps.jpg',
        html: `<p>Assistance in obtaining stamp papers, notary attestation, and franking services.</p>`
    },
    prohibited: {
        title: 'Prohibited Property',
        img: '/static/files/prohibited.jpg',
        html: `<p>Guidance on dealing with prohibited properties and related documentation.</p>`
    },
    affidavit: {
        title: 'Affidavit Preparation',
        img: '/static/files/affidavit.jpg',
        html: `<p>Drafting and attestation of affidavits for various purposes.</p>`
    },
    custom: {
        title: 'Custom Document Preparation',
        img: '/static/files/custom.jpg',
        html: `<p>Preparation of custom documents as per your specific requirements. Contact us for details.</p>`
    },
};
document.querySelectorAll('.service-summary').forEach(card => {
    card.addEventListener('click', function () {
        const key = this.getAttribute('data-service');
        const detail = serviceDetails[key];
        document.getElementById('modal-body').innerHTML = `
    <div class="modal-flex">
        <div class="modal-info">
            <h2>${detail.title}</h2>
            ${detail.html}
        </div>
        <div class="modal-img">
            <img src="${detail.img}" alt="${detail.title}" />
        </div>
    </div>
`;
        document.getElementById('service-modal').style.display = 'block';
    });
});
document.querySelector('.modal .close').onclick = function () {
    document.getElementById('service-modal').style.display = 'none';
};
window.onclick = function (event) {
    if (event.target == document.getElementById('service-modal')) {
        document.getElementById('service-modal').style.display = 'none';
    }
};
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function () {
        const key = this.getAttribute('data-service');
        const detailsDiv = document.querySelector(`.service-details[data-service="${key}"]`);
        if (detailsDiv) {
            detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
        }
    });
});
