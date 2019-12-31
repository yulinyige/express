# Issue Triage Process

When a new issue or pull request is opened the issue will be labled with `needs triage`.
If a traige team member is available they can help make sure all the required information
is provided. Depending on the issue or PR there are several next labels they can add for further
classification:

* `needs triage`: This can be kept if the triager is unsure which next steps to take
* `awaiting more info`: If more info has been requested from the author, apply this label.
* `question`: User questions which do not appear to be bugs or enahncements.
* `discuss`: Topics for discussion. Might end in an `enhancement` or `question` label.
* `bug`: Issues that present a reasonable conviction there is a bug.
* `enhancement`: Issues that are found to be a reasonable candidate feature additions.

In all cases, issues may be closed by maintainers if they don't receive timely response when
further information is sought, or when additional questions are asked.

## Approaches and Best Practices for getting into triage contributions

Review the organization's [StatusBoard](https://expressjs.github.io/statusboard/),
pay special attention to these columns: stars, watchers, open issues and contributors.
This gives you a general idea about the criticality and health of the repository.
Pick a few projects based on that criteria, your interests, and skills (existing or aspiring).

Review the project's contribution guideline if present. In a nutshell,
commit to the community's standards and values. Review the
documentation, for most of the projects it is just the README.md, and
make sure you understand the key APIs, semantics, configurations, and use cases.

It might be helpful to write your own test apps to re-affirm your
understanding of the key functions. This may identify some gaps in
documentation, record those as they might be good PR's to open.
Skim through the issue backlog; identify low hanging issues and mostly new ones.
From those, attempt to recreate issues based on the OP description and
ask questions if required. No question is a bad question!

### Becoming a Triager

Open a pull request in expressjs/express repo to request the triage role.
Use https://github.com/expressjs/express/pull/4114 for reference. The important
parts are to state that you have read and agree to the CoC and details of the role,
that you add your name to the list of triagers (email and pronouns optional), and
that you follow the commit message format.

Here are examples you can just copy paste:

Issue template:

```
Title: Request triager role for <your github username>

I have read and understood the project's Contributing guide.
I also have read and understood the process and best practices around Express triaging.

I request for a triager role for the followting orgs:

jshttp
pillarjs
express
```

Commit Message:

```
docs: request triager role for <your github username>
```

Format for name addition to the bottom of this file:

```
* [<your github username>](https://github.com/<your github username>) - **<Your Display Name>** &lt;<your email>&gt; (<your pronouns>)
```

Once you have opened your PR, a member of the TC will add you to the `triage` team in the
orgs requested.  They will then merge your PR and close the issue.  Happy triaging!

### Removal of Triage Role

There are a few cases where members can be removed as triagers:

- Breaking the CoC or project contributor guidelines
- Abuse or misuse of the role as deemed by the TC
- Lack of participation for more than 6 months

If any of these happen we will discuss as a part of the traige portion of the regular TC meetings.
If you have questions feel free to reach out to any of the TC memebers.

### Other Helpful Hints:

- When exploring the modules functionality there are a few helpful steps:
  - Turn on `DEBUG=*` (see https://www.npmjs.com/package/debug) to get detailed log information
  - It is also a good idea to do live debugging to follow the control flow, try using `node --inspect`
  - It is a good idea to make at least one pass of reading through the entire source
- When reviewing the list of open issues there are some common types and suggested actions:
  - New/unattended issues or simple questions: A good place to start
  - Hard bugs & ongoing discussions: always feel free to chime in and help
  - Issues that imply gaps in documentation: open PRs with changes or help the user to do so
- For recurring issues, it is helpful to create functional examples to demonstrate (publish as gists or a repo)
- Review and identify the maintainers. If necessary, at-mention one or more of them if you are unsure what to do
- Make sure all your interactions are professional, welcoming and respectful to the parties involved.

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
