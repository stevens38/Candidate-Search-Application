// TODO: Create an interface for the Candidate objects returned by the API


async function fetchCandidates(): Promise<Candidate[]> {
    const response = await fetch('YOUR_API_ENDPOINT');
    const data = await response.json();
    return data; // Assuming data is an array of Candidate objects
  }

    async function fetchCandidateDetails(candidateId: number): Promise<CandidateDetails> {
        const response = await fetch
        (`YOUR_API_ENDPOINT/${candidateId}`);
        const data = await response.json();
        return data; // Assuming data is a CandidateDetails object
        }

        async function fetchCandidateRepos(candidateId: number): Promise<CandidateRepo[]> {
            const response = await fetch
            (`
            YOUR_API_ENDPOINT/${candidateId}/repos`);
            const data = await response.json();
            return data; // Assuming data is an array of CandidateRepo objects
            }

            async function fetchCandidateRepoDetails(candidateId: number, repoId: number): Promise<CandidateRepoDetails> {
                const response = await fetch
                (`
                YOUR_API_ENDPOINT/${candidateId}/repos/${repoId}`);
                const data = await response.json();
                return data; // Assuming data is a CandidateRepoDetails object
                }

                async function fetchCandidateRepoLanguages(candidateId: number, repoId: number): Promise<CandidateRepoLanguages> {
                    const response = await fetch
                    (`
                    YOUR_API_ENDPOINT/${candidateId}/repos/${repoId}/languages`);
                    const data = await response.json();
                    return data; // Assuming data is a CandidateRepoLanguages object
                    }

                    export { fetchCandidates, fetchCandidateDetails, fetchCandidateRepos, fetchCandidateRepoDetails, fetchCandidateRepoLanguages };

                    

export interface Candidate {
    login: string;
    id: number;
    nodeId: string;
    avatarUrl: string;
    gravatarId: string;
    url: string;
    htmlUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    starredUrl: string;
    subscriptionsUrl: string;
    organizationsUrl: string;
    reposUrl: string;
    eventsUrl: string;
    receivedEventsUrl: string;
    type: string;
    siteAdmin: boolean;
    score: number;
}

export interface CandidateSearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Candidate[];
}

export interface CandidateDetails {
    login: string;
    id: number;
    nodeId: string;
    avatarUrl: string;
    gravatarId: string;
    url: string;
    htmlUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    starredUrl: string;
    subscriptionsUrl: string;
    organizationsUrl: string;
    reposUrl: string;
    eventsUrl: string;
    receivedEventsUrl: string;
    type: string;
    siteAdmin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitterUsername: string;
    publicRepos: number;
    publicGists: number;
    followers: number;
    following: number;
    createdAt: string;
    updatedAt: string;
}

export interface CandidateRepo {
    id: number;
    nodeId: string;
    name: string;
    fullName: string;
    private: boolean;
    owner: Candidate;
    htmlUrl: string;
    description: string;
    fork: boolean;
    url: string;
    forksUrl: string;
    keysUrl: string;
    collaboratorsUrl: string;
    teamsUrl: string;
    hooksUrl: string;
    issueEventsUrl: string;
    eventsUrl: string;
    assigneesUrl: string;
    branchesUrl: string;
    tagsUrl: string;
    blobsUrl: string;
    gitTagsUrl: string;
    gitRefsUrl: string;
    treesUrl: string;
    statusesUrl: string;
    languagesUrl: string;
    stargazersUrl: string;
    contributorsUrl: string;
    subscribersUrl: string;
    subscriptionUrl: string;
    commitsUrl: string;
    gitCommitsUrl: string;
    commentsUrl: string;
    issueCommentUrl: string;
    contentsUrl: string;
    compareUrl: string;
    mergesUrl: string;
    archiveUrl: string;
    downloadsUrl: string;
    issuesUrl: string;
    pullsUrl: string;
    milestonesUrl: string;
    notificationsUrl: string;
    labelsUrl: string;
    releasesUrl: string;
    deploymentsUrl: string;
    createdAt: string;
    updatedAt: string;
    pushedAt: string;
    gitUrl: string;
    sshUrl: string;
    cloneUrl: string;
    svnUrl: string;
    homepage: string;
    size: number;
    stargazersCount: number;
    watchersCount: number;
}

export interface CandidateRepoDetails {
    id: number;
    nodeId: string;
    name: string;
    fullName: string;
    private: boolean;
    owner: Candidate;
    htmlUrl: string;
    description: string;
    fork: boolean;
    url: string;
    forksUrl: string;
    keysUrl: string;
    collaboratorsUrl: string;
    teamsUrl: string;
    hooksUrl: string;
    issueEventsUrl: string;
    eventsUrl: string;
    assigneesUrl: string;
    branchesUrl: string;
    tagsUrl: string;
    blobsUrl: string;
    gitTagsUrl: string;
    gitRefsUrl: string;
    treesUrl: string;
    statusesUrl: string;
    languagesUrl: string;
    stargazersUrl: string;
    contributorsUrl: string;
    subscribersUrl: string;
    subscriptionUrl: string;
    commitsUrl: string;
    gitCommitsUrl: string;
    commentsUrl: string;
    issueCommentUrl: string;
    contentsUrl: string;
    compareUrl: string;
    mergesUrl: string;
    archiveUrl: string;
    downloadsUrl: string;
    issuesUrl: string;
    pullsUrl: string;
    milestonesUrl: string;
    notificationsUrl: string;
    labelsUrl: string;
    releasesUrl: string;
    deploymentsUrl: string;
    createdAt: string;
    updatedAt: string;
    pushedAt: string;
    gitUrl: string;
    sshUrl: string;
    cloneUrl: string;
    svnUrl: string;
    homepage: string;
    size: number;
    stargazersCount: number;
    watchersCount: number;
}

export interface CandidateRepoLanguage {
    name: string;
    size: number;
    url: string;
}

export interface CandidateRepoLanguages {
    [key: string]: number;
}

