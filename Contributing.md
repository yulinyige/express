# Express.js Community Contributing Guide 1.0

The goal of this document is to create a contribution process that:

* Encourages new contributions.
* Encourages contributors to remain involved.
* Avoids unnecessary processes and bureaucracy whenever possible.
* Creates a transparent decision making process that makes it clear how
contributors can be involved in decision making.

## Vocabulary

* A **Contributor** is any individual creating or commenting on an issue or pull request.
* A **Committer** is a subset of contributors who have been given write access to the repository.
* A **TC (Technical Committee)** is a group of committers representing the required technical
expertise to resolve rare disputes.

## Logging Issues

Log an issue for any question or problem you might have. When in doubt, log an issue, and
any additional policies about what to include will be provided in the responses. The only
exception is security disclosures which should be sent privately.

Committers may direct you to another repository, ask for additional clarifications, and
add appropriate metadata before the issue is addressed.

Please be courteous and respectful. Every participant is expected to follow the
project's Code of Conduct.

## Contributions

Any change to resources in this repository must be through pull requests. This applies to all changes
to documentation, code, binary files, etc. Even long term committers and TC members must use
pull requests.

No pull request can be merged without being reviewed.

For non-trivial contributions, pull requests should sit for at least 36 hours to ensure that
contributors in other timezones have time to review. Consideration should also be given to
weekends and other holiday periods to ensure active committers all have reasonable time to
become involved in the discussion and review process if they wish.

The default for each contribution is that it is accepted once no committer has an objection.
During review committers may also request that a specific contributor who is most versed in a
particular area gives a "LGTM" before the PR can be merged. There is no additional "sign off"
process for contributions to land. Once all issues brought by committers are addressed it can
be landed by any committer.

In the case of an objection being raised in a pull request by another committer, all involved
committers should seek to arrive at a consensus by way of addressing concerns being expressed
by discussion, compromise on the proposed change, or withdrawal of the proposed change.

If a contribution is controversial and committers cannot agree about how to get it to land
or if it should land then it should be escalated to the TC. TC members should regularly
discuss pending contributions in order to find a resolution. It is expected that only a
small minority of issues be brought to the TC for resolution and that discussion and
compromise among committers be the default resolution mechanism.

### List of Triagers

* [gireeshpunathil](https://github.com/gireeshpunathil) - **Gireesh Punathil** &lt;gpunathi@in.ibm.com&gt; (he/him)
* [maxakuru](https://github.com/maxakuru) - **Max Edell** &lt;mgedell@gmail.com&gt; (he/him)
* [digitaIfabric](https://github.com/digitaIfabric) - **David Wawryko** &lt;david@digitalfabric.ca&gt; (he/him)
* [sushmeet](https://github.com/sushmeet) - **Sushmeet Sunger** &lt;sushmeet.sunger@gmail.com&gt; (he/him)
* [AuggieH](https://github.com/auggieh) - **Auggie Hudak** &lt;hudakjerome@gmail.com&gt; (he/him)
* [jake32321](https://github.com/jake32321) - **Jake Reed** &lt;jacob.reed2017@gmail.com&gt; (he/him)
* [ghinks](https://github.com/ghinks) - **Glenn Hinks** &lt;ghinks@yahoo.com&gt; (he/him)
* [daprahamian](https://github.com/daprahamian) - **Dan Aprahamian** (he/him)
* [fed135](https://github.com/fed135) - **Frederic Charette** &lt;fredericcharette@gmail.com&gt; (he/him)
* [HarshithaKP](https://github.com/HarshithaKP) - **Harshitha K P** &lt;harshi46@in.ibm.com&gt; (she/her)
* [jonchurch](https://github.com/jonchurch) - **Jon Church** &lt;jon@osiolabs.com&gt; (he/him)
* [mirawlings](https://github.com/mirawlings) - **Michael Rawlings** &lt;mlrawlings@gmail.com&gt; (he/him)
* [helio-frota](https://github.com/helio-frota) - **Helio Frota** &lt;hesilva@redhat.com&gt; (he/him)

# Triaging

Open issues in this repo are subject to the following triage criteria:

`needs triage`: Issues that are opened and un-attended / unclassified belong to this
category, and are either automatically or manually labelled with `needs triage`

`question`: Issues that are not leading upto a bug or an enhancement to any of the
express repos, but emanating from the usage of it are classified as `question`

`bug`: Issues that, after investigation, provides a reasonable conviction about
a potential bug in the express code, are classified as `bug`

`enhancement`: Issues that, after discussion, investigation, and technical assessment,
found to be a reasonable candidate for a good to have feature, are tagged as `enhancement`.

Raisers may appeal to change the tag with sufficient reasoning.
Maintainers can change the tag based on the change in inference in the course of investigation.

In all cases, issues may be closed by maintainers if they don't receive timely response when
further information is sought, or when additional questions are asked.

## Approaches and Best Practices for getting into triage contributions

Review the organization's [StatusBoard](https://expressjs.github.io/statusboard/) ,
pay special attention to these columns: stars, watchers, open issues and contributors.
This gives you a general idea about the criticality and health of the repository.
Pick a few projects based on that criteria and your interests and skills (existing or aspiring).

Review the project's contribution guideline if present. In a nutshell,
pledge yourself to the community's standards and values. Review the
documentation, for most of the projects it is just the README.md, and
make sure you understand the key APIs, semantics, configurations, and use cases.

It might be helpful to write your own test programs to re-affirm your
understanding of the key functions. This may identify some gaps in
documentation, record those as they might be good PR's to open later.
Skim through the issue backlog; identify low hanging ones and mostly new ones.
From those, attempt to recreate issues based on the OP description and
ask questions if required. No question is a bad question!

### Other Helpful Hints:

  - it is a good idea to turn on DEBUG to get the next level information
  - it is also a good idea to do live debugging to follow the control flow
  - review the full list of issue backlog, make some categorization convenient to your way of work:
    - new, unattended issues
    - simple questions
    - hard bugs that are unresolved for years
    - ongoing discussions on APIs and functions
    - issues that imply potential RFEs
    - issues that imply gaps in documentation
    - issues that imply recurring patterns
    - these are not necessarily a disjoint list, mostly can have overlaps
 - start addressing one type at a time - that will build up knowledge of that area of code, interface and configuration
 - at this point it is a good idea to make one pass of reading through the entire source
   - this may be possible for smaller components like session, but may be tough for big ones (like express)
 - for recurring patterns, it is a good idea to demonstrate through fully functional programs and publish through gist for later re-use
 - review and identify the list of project maintainers. if necessary, at-mention one or more of them
 - finally, make sure all your interactions are professional, welcoming and respectful to the parties involved.

## Becoming a Committer

All contributors who land a non-trivial contribution should be on-boarded in a timely manner,
and added as a committer, and be given write access to the repository.

Committers are expected to follow this policy and continue to send pull requests, go through
proper review, and have other committers merge their pull requests.

## TC Process

The TC uses a "consensus seeking" process for issues that are escalated to the TC.
The group tries to find a resolution that has no open objections among TC members.
If a consensus cannot be reached that has no objections then a majority wins vote
is called. It is also expected that the majority of decisions made by the TC are via
a consensus seeking process and that voting is only used as a last-resort.

Resolution may involve returning the issue to committers with suggestions on how to
move forward towards a consensus. It is not expected that a meeting of the TC
will resolve all issues on its agenda during that meeting and may prefer to continue
the discussion happening among the committers.

Members can be added to the TC at any time. Any committer can nominate another committer
to the TC and the TC uses its standard consensus seeking process to evaluate whether or
not to add this new member. Members who do not participate consistently at the level of
a majority of the other members are expected to resign.
