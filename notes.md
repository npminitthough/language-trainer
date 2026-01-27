Separation of concerns

Layer	    Knows about

Prisma	    Full DB user
Passport	Authenticated identity
Express	    Request lifecycle
JWT	        Authorization claims

AuthUser is the contract between them.