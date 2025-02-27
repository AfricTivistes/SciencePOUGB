export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
	socialLinks?: {
		facebook?: string;
		twitter?: string;
		instagram?: string;
		linkedin?: string;
		tiktok?: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "SciencePOUGB",
	// Your website's title and description (meta fields)
	title: "Club Science Politique de l’UFR SJP de l’Université Gaston Berger de Saint-Louis",
	description:
		"Site officiel du Club Science Politique de l'UGB. Retrouvez nos événements, publications, ressources pédagogiques et форумы de discussion. Espace membre pour étudiants et enseignants. Rejoignez-nous !",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Science PO UGB",
		email: "contact@sciencepolitiqueugb.org",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Science PO UGB",
	},
	socialLinks: {
		facebook: "https://www.facebook.com/profile.php?id=61557182136624",
		instagram: "https://www.instagram.com/clubsciencepolitique",
		linkedin: "https://www.linkedin.com/in/club-science-po-ugb-8257b7301/",
		tiktok: "https://www.tiktok.com/@clubsciencepolitiqueugb",
	},
};

export default siteData;
