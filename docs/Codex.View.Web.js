/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.3.2
 */
Bridge.assembly("Codex.View.Web", function ($asm, globals) {
    "use strict";

    Bridge.define("Codex.AdapterTypeAttribute", {
        inherits: [System.Attribute]
    });

    /** @namespace Codex */

    /**
     * Indicates an attached property which is not intrinsic to the parent object and should be
     excluded when computing the {@link }
     *
     * @public
     * @class Codex.AttachedAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.AttachedAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.CodeReviewerStatus", {
        $kind: "enum",
        statics: {
            fields: {
                NotStarted: 0,
                Waiting: 1,
                ApprovedWithSuggestions: 2,
                Approved: 3,
                Declined: 4
            }
        }
    });

    Bridge.define("Codex.CodeReviewStatus", {
        $kind: "enum"
    });

    Bridge.define("Codex.CoerceGetAttribute", {
        inherits: [System.Attribute],
        fields: {
            CoercedSourceType: null
        },
        ctors: {
            ctor: function (coercedSourceType) {
                if (coercedSourceType === void 0) { coercedSourceType = null; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.CoercedSourceType = coercedSourceType;
            }
        }
    });

    Bridge.define("Codex.CommentImportance", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Indicates that the author can decide to take the change or not
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 0
                 * @type Codex.CommentImportance
                 */
                AuthorDecides: 0,
                /**
                 * Default importance
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 1
                 * @type Codex.CommentImportance
                 */
                Info: 1,
                /**
                 * Reviewer would like further discussion on this comment
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 2
                 * @type Codex.CommentImportance
                 */
                Discuss: 2,
                /**
                 * Waiting on this comment to be addressed in order to approve
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 3
                 * @type Codex.CommentImportance
                 */
                Blocker: 3
            }
        }
    });

    Bridge.define("Codex.CommentStatus", {
        $kind: "enum",
        statics: {
            fields: {
                Unpublished: 0,
                Active: 1,
                Resolved: 2,
                WontFix: 3,
                Pending: 4,
                Closed: 5
            }
        }
    });

    Bridge.define("Codex.DataInclusionAttribute", {
        inherits: [System.Attribute],
        fields: {
            DataInclusion: 0
        },
        ctors: {
            ctor: function (dataInclusion) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.DataInclusion = dataInclusion;
            }
        }
    });

    Bridge.define("Codex.DataInclusionOptions", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Data should always be included
                 *
                 * @static
                 * @public
                 * @memberof Codex.DataInclusionOptions
                 * @constant
                 * @default 0
                 * @type Codex.DataInclusionOptions
                 */
                None: 0,
                Definitions: 1,
                References: 2,
                Classifications: 4,
                SearchDefinitions: 8,
                SearchReferences: 16,
                Content: 32,
                All: 63,
                Default: 62
            }
        }
    });

    Bridge.define("Codex.ISerializableEntity", {
        $kind: "interface"
    });

    Bridge.define("Codex.EntityIdAttribute", {
        inherits: [System.Attribute]
    });

    /**
     * Describes change kinds for files
     *
     * @public
     * @class Codex.FileChangeKind
     */
    Bridge.define("Codex.FileChangeKind", {
        $kind: "enum",
        statics: {
            fields: {
                Add: 0,
                Edit: 1,
                Rename: 2,
                Delete: 3
            }
        }
    });

    Bridge.define("Codex.Framework.Types.IStore", {
        $kind: "interface"
    });

    /** @namespace Codex.Framework.Types */

    /**
     * High level storage operations
     *
     * @abstract
     * @public
     * @class Codex.Framework.Types.IStore$1
     */
    Bridge.definei("Codex.Framework.Types.IStore$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.GeneratedClassNameAttribute", {
        inherits: [System.Attribute],
        fields: {
            Name: null
        },
        ctors: {
            ctor: function (name) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Name = name;
            }
        }
    });

    Bridge.define("Codex.IRepoScopeEntity", {
        $kind: "interface"
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @abstract
     * @public
     * @class Codex.ISearchEntity
     */
    Bridge.define("Codex.ISearchEntity", {
        $kind: "interface"
    });

    /**
     * Describes a branch in a repository
     *
     * @abstract
     * @public
     * @class Codex.IBranch
     */
    Bridge.define("Codex.IBranch", {
        $kind: "interface"
    });

    Bridge.define("Codex.IClassificationList", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISpan", {
        $kind: "interface"
    });

    /**
     * Describes styling for a given classification
     *
     * @abstract
     * @public
     * @class Codex.IClassificationStyle
     */
    Bridge.define("Codex.IClassificationStyle", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReview", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewComment", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewCommentThread", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewerInfo", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewIteration", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeSymbol", {
        $kind: "interface"
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitFileLink", {
        $kind: "interface"
    });

    /**
     * Defines documentation about a symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationInfo
     */
    Bridge.define("Codex.IDocumentationInfo", {
        $kind: "interface"
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @abstract
     * @public
     * @class Codex.IEncodingDescription
     */
    Bridge.define("Codex.IEncodingDescription", {
        $kind: "interface"
    });

    Bridge.define("Codex.IFileStatistics", {
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageInfo", {
        $kind: "interface"
    });

    Bridge.definei("Codex.IMutable$2", function (TMutable, TImmutable) { return {
        $kind: "interface"
    }; });

    /**
     * Indicates stages for which the given property should be included
     *
     * @public
     * @class Codex.IncludeAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.IncludeAttribute", {
        inherits: [System.Attribute],
        fields: {
            AllowedStages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.AllowedStages = stages;
            }
        }
    });

    Bridge.define("Codex.IOutliningRegion", {
        $kind: "interface"
    });

    /**
     * Documentation for a method parameter
     *
     * @abstract
     * @public
     * @class Codex.IParameterDocumentation
     */
    Bridge.define("Codex.IParameterDocumentation", {
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertyMap", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferencedProject", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceList", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepository", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositoryReference", {
        $kind: "interface"
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @abstract
     * @public
     * @class Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.IRepositoryStoreInfo", {
        $kind: "interface"
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @abstract
     * @public
     * @class Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ISourceControlFileInfo", {
        $kind: "interface"
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @abstract
     * @public
     * @class Codex.ISourceFile
     */
    Bridge.define("Codex.ISourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.IStoredBoundSourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolLineSpanList", {
        $kind: "interface"
    });

    Bridge.define("Codex.MutableExtensions");

    Bridge.define("Codex.ObjectModel.CodexTypeUtilities", {
        statics: {
            fields: {
                s_typeMappings: null
            },
            ctors: {
                init: function () {
                    this.s_typeMappings = Codex.ObjectModel.CodexTypeUtilities.CreateTypeMapping();
                }
            },
            methods: {
                CreateTypeMapping: function () {
                    var typeMapping = new (System.Collections.Generic.Dictionary$2(Function,Function))();
                    typeMapping.add(Codex.ICommit, Codex.ObjectModel.Commit);
                    typeMapping.add(Codex.ObjectModel.Commit, Codex.ICommit);
                    typeMapping.add(Codex.ICommitChangedFile, Codex.ObjectModel.CommitChangedFile);
                    typeMapping.add(Codex.ObjectModel.CommitChangedFile, Codex.ICommitChangedFile);
                    typeMapping.add(Codex.ICommitFileLink, Codex.ObjectModel.CommitFileLink);
                    typeMapping.add(Codex.ObjectModel.CommitFileLink, Codex.ICommitFileLink);
                    typeMapping.add(Codex.IBranch, Codex.ObjectModel.Branch);
                    typeMapping.add(Codex.ObjectModel.Branch, Codex.IBranch);
                    typeMapping.add(Codex.IBoundSourceFile, Codex.ObjectModel.BoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.BoundSourceFile, Codex.IBoundSourceFile);
                    typeMapping.add(Codex.IBoundSourceInfo, Codex.ObjectModel.BoundSourceInfo);
                    typeMapping.add(Codex.ObjectModel.BoundSourceInfo, Codex.IBoundSourceInfo);
                    typeMapping.add(Codex.ISourceControlFileInfo, Codex.ObjectModel.SourceControlFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceControlFileInfo, Codex.ISourceControlFileInfo);
                    typeMapping.add(Codex.ISourceFileInfo, Codex.ObjectModel.SourceFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceFileInfo, Codex.ISourceFileInfo);
                    typeMapping.add(Codex.IEncodingDescription, Codex.ObjectModel.EncodingDescription);
                    typeMapping.add(Codex.ObjectModel.EncodingDescription, Codex.IEncodingDescription);
                    typeMapping.add(Codex.ISourceFile, Codex.ObjectModel.SourceFile);
                    typeMapping.add(Codex.ObjectModel.SourceFile, Codex.ISourceFile);
                    typeMapping.add(Codex.IOutliningRegion, Codex.ObjectModel.OutliningRegion);
                    typeMapping.add(Codex.ObjectModel.OutliningRegion, Codex.IOutliningRegion);
                    typeMapping.add(Codex.IDefinitionSpan, Codex.ObjectModel.DefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.DefinitionSpan, Codex.IDefinitionSpan);
                    typeMapping.add(Codex.IParameterDefinitionSpan, Codex.ObjectModel.ParameterDefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterDefinitionSpan, Codex.IParameterDefinitionSpan);
                    typeMapping.add(Codex.IReferenceSpan, Codex.ObjectModel.ReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ReferenceSpan, Codex.IReferenceSpan);
                    typeMapping.add(Codex.IParameterReferenceSpan, Codex.ObjectModel.ParameterReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterReferenceSpan, Codex.IParameterReferenceSpan);
                    typeMapping.add(Codex.IClassificationSpan, Codex.ObjectModel.ClassificationSpan);
                    typeMapping.add(Codex.ObjectModel.ClassificationSpan, Codex.IClassificationSpan);
                    typeMapping.add(Codex.ISymbolSpan, Codex.ObjectModel.SymbolSpan);
                    typeMapping.add(Codex.ObjectModel.SymbolSpan, Codex.ISymbolSpan);
                    typeMapping.add(Codex.ITextLineSpan, Codex.ObjectModel.TextLineSpan);
                    typeMapping.add(Codex.ObjectModel.TextLineSpan, Codex.ITextLineSpan);
                    typeMapping.add(Codex.ILineSpan, Codex.ObjectModel.LineSpan);
                    typeMapping.add(Codex.ObjectModel.LineSpan, Codex.ILineSpan);
                    typeMapping.add(Codex.ISpan, Codex.ObjectModel.Span);
                    typeMapping.add(Codex.ObjectModel.Span, Codex.ISpan);
                    typeMapping.add(Codex.ICodeReview, Codex.ObjectModel.CodeReview);
                    typeMapping.add(Codex.ObjectModel.CodeReview, Codex.ICodeReview);
                    typeMapping.add(Codex.ICodeReviewIteration, Codex.ObjectModel.CodeReviewIteration);
                    typeMapping.add(Codex.ObjectModel.CodeReviewIteration, Codex.ICodeReviewIteration);
                    typeMapping.add(Codex.ICodeReviewerInfo, Codex.ObjectModel.CodeReviewerInfo);
                    typeMapping.add(Codex.ObjectModel.CodeReviewerInfo, Codex.ICodeReviewerInfo);
                    typeMapping.add(Codex.ICodeReviewFile, Codex.ObjectModel.CodeReviewFile);
                    typeMapping.add(Codex.ObjectModel.CodeReviewFile, Codex.ICodeReviewFile);
                    typeMapping.add(Codex.ICodeReviewCommentThread, Codex.ObjectModel.CodeReviewCommentThread);
                    typeMapping.add(Codex.ObjectModel.CodeReviewCommentThread, Codex.ICodeReviewCommentThread);
                    typeMapping.add(Codex.ICodeReviewComment, Codex.ObjectModel.CodeReviewComment);
                    typeMapping.add(Codex.ObjectModel.CodeReviewComment, Codex.ICodeReviewComment);
                    typeMapping.add(Codex.ILanguageInfo, Codex.ObjectModel.LanguageInfo);
                    typeMapping.add(Codex.ObjectModel.LanguageInfo, Codex.ILanguageInfo);
                    typeMapping.add(Codex.IClassificationStyle, Codex.ObjectModel.ClassificationStyle);
                    typeMapping.add(Codex.ObjectModel.ClassificationStyle, Codex.IClassificationStyle);
                    typeMapping.add(Codex.IProject, Codex.ObjectModel.AnalyzedProject);
                    typeMapping.add(Codex.ObjectModel.AnalyzedProject, Codex.IProject);
                    typeMapping.add(Codex.IReferencedProject, Codex.ObjectModel.ReferencedProject);
                    typeMapping.add(Codex.ObjectModel.ReferencedProject, Codex.IReferencedProject);
                    typeMapping.add(Codex.IProjectFileLink, Codex.ObjectModel.ProjectFileLink);
                    typeMapping.add(Codex.ObjectModel.ProjectFileLink, Codex.IProjectFileLink);
                    typeMapping.add(Codex.IDocumentationInfo, Codex.ObjectModel.DocumentationInfo);
                    typeMapping.add(Codex.ObjectModel.DocumentationInfo, Codex.IDocumentationInfo);
                    typeMapping.add(Codex.IParameterDocumentation, Codex.ObjectModel.ParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.ParameterDocumentation, Codex.IParameterDocumentation);
                    typeMapping.add(Codex.ITypedParameterDocumentation, Codex.ObjectModel.TypedParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.TypedParameterDocumentation, Codex.ITypedParameterDocumentation);
                    typeMapping.add(Codex.IDocumentationReferenceSymbol, Codex.ObjectModel.DocumentationReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.DocumentationReferenceSymbol, Codex.IDocumentationReferenceSymbol);
                    typeMapping.add(Codex.IPropertySearchModel, Codex.ObjectModel.PropertySearchModel);
                    typeMapping.add(Codex.ObjectModel.PropertySearchModel, Codex.IPropertySearchModel);
                    typeMapping.add(Codex.IPropertyMap, Codex.ObjectModel.PropertyMap);
                    typeMapping.add(Codex.ObjectModel.PropertyMap, Codex.IPropertyMap);
                    typeMapping.add(Codex.IRepository, Codex.ObjectModel.Repository);
                    typeMapping.add(Codex.ObjectModel.Repository, Codex.IRepository);
                    typeMapping.add(Codex.IRepositoryReference, Codex.ObjectModel.RepositoryReference);
                    typeMapping.add(Codex.ObjectModel.RepositoryReference, Codex.IRepositoryReference);
                    typeMapping.add(Codex.ISearchEntity, Codex.ObjectModel.SearchEntity);
                    typeMapping.add(Codex.ObjectModel.SearchEntity, Codex.ISearchEntity);
                    typeMapping.add(Codex.IRepoScopeEntity, Codex.ObjectModel.RepoScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoScopeEntity, Codex.IRepoScopeEntity);
                    typeMapping.add(Codex.ICommitScopeEntity, Codex.ObjectModel.CommitScopeEntity);
                    typeMapping.add(Codex.ObjectModel.CommitScopeEntity, Codex.ICommitScopeEntity);
                    typeMapping.add(Codex.IProjectScopeEntity, Codex.ObjectModel.ProjectScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectScopeEntity, Codex.IProjectScopeEntity);
                    typeMapping.add(Codex.IRepoFileScopeEntity, Codex.ObjectModel.RepoFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoFileScopeEntity, Codex.IRepoFileScopeEntity);
                    typeMapping.add(Codex.IProjectFileScopeEntity, Codex.ObjectModel.ProjectFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectFileScopeEntity, Codex.IProjectFileScopeEntity);
                    typeMapping.add(Codex.IRegisteredEntity, Codex.ObjectModel.RegisteredEntity);
                    typeMapping.add(Codex.ObjectModel.RegisteredEntity, Codex.IRegisteredEntity);
                    typeMapping.add(Codex.IStoredFilter, Codex.ObjectModel.StoredFilter);
                    typeMapping.add(Codex.ObjectModel.StoredFilter, Codex.IStoredFilter);
                    typeMapping.add(Codex.IDefinitionSearchModel, Codex.ObjectModel.DefinitionSearchModel);
                    typeMapping.add(Codex.ObjectModel.DefinitionSearchModel, Codex.IDefinitionSearchModel);
                    typeMapping.add(Codex.ILanguageSearchModel, Codex.ObjectModel.LanguageSearchModel);
                    typeMapping.add(Codex.ObjectModel.LanguageSearchModel, Codex.ILanguageSearchModel);
                    typeMapping.add(Codex.IReferenceSearchModel, Codex.ObjectModel.ReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ReferenceSearchModel, Codex.IReferenceSearchModel);
                    typeMapping.add(Codex.ISourceSearchModelBase, Codex.ObjectModel.SourceSearchModelBase);
                    typeMapping.add(Codex.ObjectModel.SourceSearchModelBase, Codex.ISourceSearchModelBase);
                    typeMapping.add(Codex.IBoundSourceSearchModel, Codex.ObjectModel.BoundSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.BoundSourceSearchModel, Codex.IBoundSourceSearchModel);
                    typeMapping.add(Codex.ITextSourceSearchModel, Codex.ObjectModel.TextSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.TextSourceSearchModel, Codex.ITextSourceSearchModel);
                    typeMapping.add(Codex.IRepositorySearchModel, Codex.ObjectModel.RepositorySearchModel);
                    typeMapping.add(Codex.ObjectModel.RepositorySearchModel, Codex.IRepositorySearchModel);
                    typeMapping.add(Codex.IProjectSearchModel, Codex.ObjectModel.ProjectSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectSearchModel, Codex.IProjectSearchModel);
                    typeMapping.add(Codex.IProjectReferenceSearchModel, Codex.ObjectModel.ProjectReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectReferenceSearchModel, Codex.IProjectReferenceSearchModel);
                    typeMapping.add(Codex.ICommitSearchModel, Codex.ObjectModel.CommitSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitSearchModel, Codex.ICommitSearchModel);
                    typeMapping.add(Codex.ICommitFilesSearchModel, Codex.ObjectModel.CommitFilesSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitFilesSearchModel, Codex.ICommitFilesSearchModel);
                    typeMapping.add(Codex.IFileStatistics, Codex.ObjectModel.FileStatistics);
                    typeMapping.add(Codex.ObjectModel.FileStatistics, Codex.IFileStatistics);
                    typeMapping.add(Codex.IRepositoryStoreInfo, Codex.ObjectModel.RepositoryStoreInfo);
                    typeMapping.add(Codex.ObjectModel.RepositoryStoreInfo, Codex.IRepositoryStoreInfo);
                    typeMapping.add(Codex.ICommitFilesDirectory, Codex.ObjectModel.CommitFilesDirectory);
                    typeMapping.add(Codex.ObjectModel.CommitFilesDirectory, Codex.ICommitFilesDirectory);
                    typeMapping.add(Codex.IStoredBoundSourceFile, Codex.ObjectModel.StoredBoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.StoredBoundSourceFile, Codex.IStoredBoundSourceFile);
                    typeMapping.add(Codex.IDefinitionSymbol, Codex.ObjectModel.DefinitionSymbol);
                    typeMapping.add(Codex.ObjectModel.DefinitionSymbol, Codex.IDefinitionSymbol);
                    typeMapping.add(Codex.IReferenceSymbol, Codex.ObjectModel.ReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.ReferenceSymbol, Codex.IReferenceSymbol);
                    typeMapping.add(Codex.ICodeSymbol, Codex.ObjectModel.Symbol);
                    typeMapping.add(Codex.ObjectModel.Symbol, Codex.ICodeSymbol);
                    typeMapping.add(Codex.Sdk.Search.ISearchResult, Codex.ObjectModel.SearchResult);
                    typeMapping.add(Codex.ObjectModel.SearchResult, Codex.Sdk.Search.ISearchResult);
                    typeMapping.add(Codex.Sdk.Search.IIndex, Codex.ObjectModel.Index);
                    typeMapping.add(Codex.ObjectModel.Index, Codex.Sdk.Search.IIndex);
                    return typeMapping;
                }
            }
        }
    });

    /** @namespace Codex.ObjectModel */

    /**
     * Allows defining extension data during analysis
     *
     * @public
     * @class Codex.ObjectModel.ExtensionData
     */
    Bridge.define("Codex.ObjectModel.ExtensionData");

    /**
     * Defines Codex glyphs
     *
     * @public
     * @class Codex.ObjectModel.Glyph
     */
    Bridge.define("Codex.ObjectModel.Glyph", {
        $kind: "enum",
        statics: {
            fields: {
                Unknown: -1,
                Assembly: 0,
                BasicFile: 1,
                BasicProject: 2,
                ClassPublic: 3,
                ClassProtected: 4,
                ClassPrivate: 5,
                ClassInternal: 6,
                CSharpFile: 7,
                CSharpProject: 8,
                ConstantPublic: 9,
                ConstantProtected: 10,
                ConstantPrivate: 11,
                ConstantInternal: 12,
                DelegatePublic: 13,
                DelegateProtected: 14,
                DelegatePrivate: 15,
                DelegateInternal: 16,
                EnumPublic: 17,
                EnumProtected: 18,
                EnumPrivate: 19,
                EnumInternal: 20,
                EnumMember: 21,
                Error: 22,
                EventPublic: 23,
                EventProtected: 24,
                EventPrivate: 25,
                EventInternal: 26,
                ExtensionMethodPublic: 27,
                ExtensionMethodProtected: 28,
                ExtensionMethodPrivate: 29,
                ExtensionMethodInternal: 30,
                FieldPublic: 31,
                FieldProtected: 32,
                FieldPrivate: 33,
                FieldInternal: 34,
                InterfacePublic: 35,
                InterfaceProtected: 36,
                InterfacePrivate: 37,
                InterfaceInternal: 38,
                Intrinsic: 39,
                Keyword: 40,
                Label: 41,
                Local: 42,
                Namespace: 43,
                MethodPublic: 44,
                MethodProtected: 45,
                MethodPrivate: 46,
                MethodInternal: 47,
                ModulePublic: 48,
                ModuleProtected: 49,
                ModulePrivate: 50,
                ModuleInternal: 51,
                OpenFolder: 52,
                Operator: 53,
                Parameter: 54,
                PropertyPublic: 55,
                PropertyProtected: 56,
                PropertyPrivate: 57,
                PropertyInternal: 58,
                RangeVariable: 59,
                Reference: 60,
                StructurePublic: 61,
                StructureProtected: 62,
                StructurePrivate: 63,
                StructureInternal: 64,
                TypeParameter: 65,
                Up: 66,
                Down: 67,
                Left: 68,
                Right: 69,
                Dot: 70,
                Snippet: 71
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities", {
        statics: {
            methods: {
                GetGlyphNumber: function (glyph) {
                    var result = (((((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphGroup(glyph)) & 65535) + ((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphItem(glyph)) & 65535)) | 0)) & 65535;
                    return result;
                },
                GetStandardGlyphGroup: function (glyph) {
                    switch (glyph) {
                        case Codex.ObjectModel.Glyph.Assembly: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphAssembly;
                        case Codex.ObjectModel.Glyph.ClassPublic: 
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupClass;
                        case Codex.ObjectModel.Glyph.ConstantPublic: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupConstant;
                        case Codex.ObjectModel.Glyph.CSharpFile: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphCSharpFile;
                        case Codex.ObjectModel.Glyph.DelegatePublic: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupDelegate;
                        case Codex.ObjectModel.Glyph.EnumPublic: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnum;
                        case Codex.ObjectModel.Glyph.EnumMember: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnumMember;
                        case Codex.ObjectModel.Glyph.Error: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupError;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPublic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethod;
                        case Codex.ObjectModel.Glyph.ExtensionMethodProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodProtected;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodPrivate;
                        case Codex.ObjectModel.Glyph.ExtensionMethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodInternal;
                        case Codex.ObjectModel.Glyph.EventPublic: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEvent;
                        case Codex.ObjectModel.Glyph.FieldPublic: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupField;
                        case Codex.ObjectModel.Glyph.InterfacePublic: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupInterface;
                        case Codex.ObjectModel.Glyph.Intrinsic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Keyword: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphKeyword;
                        case Codex.ObjectModel.Glyph.Label: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Local: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Namespace: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupNamespace;
                        case Codex.ObjectModel.Glyph.MethodPublic: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupMethod;
                        case Codex.ObjectModel.Glyph.ModulePublic: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupModule;
                        case Codex.ObjectModel.Glyph.OpenFolder: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphOpenFolder;
                        case Codex.ObjectModel.Glyph.Operator: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupOperator;
                        case Codex.ObjectModel.Glyph.Parameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.PropertyPublic: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupProperty;
                        case Codex.ObjectModel.Glyph.RangeVariable: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Reference: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphReference;
                        case Codex.ObjectModel.Glyph.StructurePublic: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupStruct;
                        case Codex.ObjectModel.Glyph.TypeParameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupType;
                        case Codex.ObjectModel.Glyph.Up: 
                        case Codex.ObjectModel.Glyph.Down: 
                        case Codex.ObjectModel.Glyph.Left: 
                        case Codex.ObjectModel.Glyph.Right: 
                        case Codex.ObjectModel.Glyph.Dot: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphArrow;
                        default: 
                            throw new System.ArgumentException("glyph");
                    }
                },
                GetStandardGlyphItem: function (icon) {
                    switch (icon) {
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemProtected;
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPrivate;
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemFriend;
                        default: 
                            // We don't want any overlays
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPublic;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphGroupClass: 0,
                GlyphGroupConstant: 6,
                GlyphGroupDelegate: 12,
                GlyphGroupEnum: 18,
                GlyphGroupEnumMember: 24,
                GlyphGroupEvent: 30,
                GlyphGroupException: 36,
                GlyphGroupField: 42,
                GlyphGroupInterface: 48,
                GlyphGroupMacro: 54,
                GlyphGroupMap: 60,
                GlyphGroupMapItem: 66,
                GlyphGroupMethod: 72,
                GlyphGroupOverload: 78,
                GlyphGroupModule: 84,
                GlyphGroupNamespace: 90,
                GlyphGroupOperator: 96,
                GlyphGroupProperty: 102,
                GlyphGroupStruct: 108,
                GlyphGroupTemplate: 114,
                GlyphGroupTypedef: 120,
                GlyphGroupType: 126,
                GlyphGroupUnion: 132,
                GlyphGroupVariable: 138,
                GlyphGroupValueType: 144,
                GlyphGroupIntrinsic: 150,
                GlyphGroupJSharpMethod: 156,
                GlyphGroupJSharpField: 162,
                GlyphGroupJSharpClass: 168,
                GlyphGroupJSharpNamespace: 174,
                GlyphGroupJSharpInterface: 180,
                GlyphGroupError: 186,
                GlyphBscFile: 191,
                GlyphAssembly: 192,
                GlyphLibrary: 193,
                GlyphVBProject: 194,
                GlyphCoolProject: 196,
                GlyphCppProject: 199,
                GlyphDialogId: 200,
                GlyphOpenFolder: 201,
                GlyphClosedFolder: 202,
                GlyphArrow: 203,
                GlyphCSharpFile: 204,
                GlyphCSharpExpansion: 205,
                GlyphKeyword: 206,
                GlyphInformation: 207,
                GlyphReference: 208,
                GlyphRecursion: 209,
                GlyphXmlItem: 210,
                GlyphJSharpProject: 211,
                GlyphJSharpDocument: 212,
                GlyphForwardType: 213,
                GlyphCallersGraph: 214,
                GlyphCallGraph: 215,
                GlyphWarning: 216,
                GlyphMaybeReference: 217,
                GlyphMaybeCaller: 218,
                GlyphMaybeCall: 219,
                GlyphExtensionMethod: 220,
                GlyphExtensionMethodInternal: 221,
                GlyphExtensionMethodFriend: 222,
                GlyphExtensionMethodProtected: 223,
                GlyphExtensionMethodPrivate: 224,
                GlyphExtensionMethodShortcut: 225,
                GlyphXmlAttribute: 226,
                GlyphXmlChild: 227,
                GlyphXmlDescendant: 228,
                GlyphXmlNamespace: 229,
                GlyphXmlAttributeQuestion: 230,
                GlyphXmlAttributeCheck: 231,
                GlyphXmlChildQuestion: 232,
                GlyphXmlChildCheck: 233,
                GlyphXmlDescendantQuestion: 234,
                GlyphXmlDescendantCheck: 235,
                GlyphCompletionWarning: 236,
                GlyphGroupUnknown: 237
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphItem", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphItemPublic: 0,
                GlyphItemInternal: 1,
                GlyphItemFriend: 2,
                GlyphItemProtected: 3,
                GlyphItemPrivate: 4,
                GlyphItemShortcut: 5,
                TotalGlyphItems: 6
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IIndex", {
        $kind: "interface"
    });

    /**
     * Defines standard set of project kinds
     *
     * @public
     * @class Codex.ObjectModel.ProjectKind
     */
    Bridge.define("Codex.ObjectModel.ProjectKind", {
        $kind: "enum",
        statics: {
            fields: {
                Source: 0,
                MetadataAsSource: 1,
                Decompilation: 2
            }
        }
    });

    /**
     * Defines standard set of reference kinds
     *
     * @public
     * @class Codex.ObjectModel.ReferenceKind
     */
    Bridge.define("Codex.ObjectModel.ReferenceKind", {
        $kind: "enum",
        statics: {
            fields: {
                Definition: 0,
                /**
                 * This represents a constructor declaration for the given type. This is different than
                 instantiation which actually represents a call to the constructor
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 1
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Constructor: 1,
                /**
                 * A call to the constructor of the type referenced by the symbol. This is different than
                 constructor which is the actual declaration for a constructor for the type symbol.
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 2
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Instantiation: 2,
                DerivedType: 3,
                InterfaceInheritance: 4,
                InterfaceImplementation: 5,
                Override: 6,
                InterfaceMemberImplementation: 7,
                Write: 8,
                Read: 9,
                GuidUsage: 10,
                UsingDispose: 11,
                /**
                 * The symbol is the return type of a method or property getter
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 12
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                ReturnType: 12,
                EmptyArrayAllocation: 13,
                MSBuildPropertyAssignment: 14,
                MSBuildPropertyUsage: 15,
                MSBuildItemAssignment: 16,
                MSBuildItemUsage: 17,
                MSBuildTargetDeclaration: 18,
                MSBuildTargetUsage: 19,
                MSBuildTaskDeclaration: 20,
                MSBuildTaskUsage: 21,
                Text: 22,
                ProjectLevelReference: 23,
                /**
                 * Catch-all reference comes after more specific reference kinds
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 24
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Reference: 24
            }
        }
    });

    Bridge.define("Codex.ObjectModel.SymbolId", {
        inherits: function () { return [System.IEquatable$1(Codex.ObjectModel.SymbolId)]; },
        $kind: "struct",
        statics: {
            methods: {
                UnsafeCreateWithValue: function (value) {
                    return new Codex.ObjectModel.SymbolId.$ctor1(value);
                },
                getDefaultValue: function () { return new Codex.ObjectModel.SymbolId(); }
            }
        },
        fields: {
            Value: null
        },
        alias: ["equalsT", "System$IEquatable$1$Codex$ObjectModel$SymbolId$equalsT"],
        ctors: {
            $ctor1: function (value) {
                this.$initialize();
                this.Value = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equalsT: function (other) {
                return Bridge.referenceEquals(this.Value, other.Value);
            },
            toString: function () {
                return this.Value;
            },
            getHashCode: function () {
                var h = Bridge.addHash([3333875138, this.Value]);
                return h;
            },
            $clone: function (to) {
                var s = to || new Codex.ObjectModel.SymbolId();
                s.Value = this.Value;
                return s;
            }
        }
    });

    Bridge.define("Codex.ObjectStage", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Analysis: 1,
                Index: 2,
                Search: 4,
                All: 7
            }
        }
    });

    Bridge.define("Codex.PlaceholderAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.QueryAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.ReadOnlyListAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.RequiredForAttribute", {
        inherits: [System.Attribute],
        fields: {
            Stages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Stages = stages;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IndexFilter$1", function (T) { return {
        statics: {
            methods: {
                op_BitwiseAnd: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.And, left, right);
                },
                op_BitwiseOr: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.Or, left, right);
                }
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.BinaryOperator", {
        $kind: "enum",
        statics: {
            fields: {
                And: 0,
                Or: 1
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexArgumentsBase", {
        fields: {
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.CodexArgumentsBase
             * @default 100
             * @type number
             */
            MaxResults: 0
        },
        ctors: {
            init: function () {
                this.MaxResults = 100;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexServiceMethod", {
        $kind: "enum",
        statics: {
            fields: {
                Search: 0,
                FindAllRefs: 1,
                FindDef: 2,
                FindDefLocation: 3,
                GetSource: 4
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.TermIndexProperty$1", function (T) { return {

    }; });

    /** @namespace Codex.Sdk.Search */

    /**
     * High level operations for codex
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.ICodex
     */
    Bridge.define("Codex.Sdk.Search.ICodex", {
        $kind: "interface"
    });

    Bridge.definei("Codex.Sdk.Search.IIndexQuery$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.definei("Codex.Sdk.Search.IIndexQueryFilter$1", function (T) { return {
        $kind: "interface"
    }; });

    /**
     * High level query operations for indexed code
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.Index$1
     */
    Bridge.define("Codex.Sdk.Search.Index$1", function (T) { return {

    }; });

    Bridge.define("Codex.Sdk.Search.IndexQuery$1", function (T) { return {
        props: {
            Filter: null,
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQuery$1
             * @function MaxResults
             * @type number
             */
            MaxResults: 0
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryHits$1", function (T) { return {
        props: {
            /**
             * The total number of results matching the query. 
             NOTE: This may be greater than the number of hits returned.
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Total
             * @type number
             */
            Total: 0,
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Hits
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Hits: null
        },
        methods: {
            toString: function () {
                return System.String.format("Total: {0}, {1}", Bridge.box(this.Total, System.Int32), System.Object.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse", {
        props: {
            /**
             * If the query failed, this will contain the error message
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Error
             * @type string
             */
            Error: null,
            /**
             * The raw query sent to the index server
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function RawQueries
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            RawQueries: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Duration
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            Duration: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function ServerTime
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            ServerTime: null
        },
        ctors: {
            init: function () {
                this.Duration = new Codex.Sdk.Search.SerializableTimeSpan();
                this.ServerTime = new Codex.Sdk.Search.SerializableTimeSpan();
            }
        },
        methods: {
            toString: function () {
                return System.String.format("Error: {0}, Duration: {1}", this.Error, this.Duration.$clone());
            }
        }
    });

    Bridge.definei("Codex.Sdk.Search.ITermProperty$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.SerializableTimeSpan", {
        $kind: "struct",
        statics: {
            methods: {
                op_Implicit$1: function (value) {
                    return value.AsTimeSpan();
                },
                op_Implicit: function (value) {
                    return new Codex.Sdk.Search.SerializableTimeSpan.$ctor1(value);
                },
                getDefaultValue: function () { return new Codex.Sdk.Search.SerializableTimeSpan(); }
            }
        },
        props: {
            Ticks: System.Int64(0)
        },
        ctors: {
            $ctor1: function (timespan) {
                this.$initialize();
                this.Ticks = timespan.getTicks();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            AsTimeSpan: function () {
                return System.TimeSpan.fromTicks(this.Ticks);
            },
            toString: function () {
                return this.AsTimeSpan().toString();
            },
            getHashCode: function () {
                var h = Bridge.addHash([9077984700, this.Ticks]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Codex.Sdk.Search.SerializableTimeSpan)) {
                    return false;
                }
                return Bridge.equals(this.Ticks, o.Ticks);
            },
            $clone: function (to) {
                var s = to || new Codex.Sdk.Search.SerializableTimeSpan();
                s.Ticks = this.Ticks;
                return s;
            }
        }
    });

    Bridge.define("Codex.SearchBehavior", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Term: 1,
                NormalizedKeyword: 2,
                Sortword: 3,
                HierarchicalPath: 4,
                FullText: 5,
                Prefix: 6,
                PrefixFullName: 7
            }
        }
    });

    Bridge.define("Codex.SearchBehaviorAttribute", {
        inherits: [System.Attribute],
        fields: {
            Behavior: 0
        },
        ctors: {
            ctor: function (behavior) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Behavior = behavior;
            }
        }
    });

    Bridge.define("Codex.SearchDescriptorInlineAttribute", {
        inherits: [System.Attribute],
        fields: {
            Inline: false
        },
        ctors: {
            ctor: function (inline) {
                if (inline === void 0) { inline = false; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Inline = inline;
            }
        }
    });

    Bridge.define("Codex.SearchType", {
        statics: {
            methods: {
                Create: function (T, registeredSearchTypes, name) {
                    if (name === void 0) { name = null; }
                    var searchType = new (Codex.SearchType$1(T))(name);
                    searchType.Id = registeredSearchTypes.Count;
                    registeredSearchTypes.add(searchType);
                    return searchType;
                }
            }
        },
        props: {
            Name: null,
            IndexName: null,
            Id: 0
        }
    });

    Bridge.define("Codex.SearchTypes", {
        statics: {
            fields: {
                RegisteredSearchTypes: null,
                Definition: null,
                /**
                 * @static
                 * @public
                 * @memberof Codex.SearchTypes
                 * @type Codex.SearchType
                 */
                Reference: null,
                TextSource: null,
                BoundSource: null,
                Language: null,
                Repository: null,
                Project: null,
                Commit: null,
                CommitFiles: null,
                ProjectReference: null,
                Property: null,
                StoredFilter: null,
                RegisteredEntity: null
            },
            ctors: {
                init: function () {
                    var $t, $t1, $t2, $t3, $t4, $t5;
                    this.RegisteredSearchTypes = new (System.Collections.Generic.List$1(Codex.SearchType)).ctor();
                    this.Definition = Codex.SearchType.Create(Codex.IDefinitionSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Reference = Codex.SearchType.Create(Codex.IReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.TextSource = Codex.SearchType.Create(Codex.ITextSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.BoundSource = Codex.SearchType.Create(Codex.IBoundSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Language = Codex.SearchType.Create(Codex.ILanguageSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Repository = Codex.SearchType.Create(Codex.IRepositorySearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Project = Codex.SearchType.Create(Codex.IProjectSearchModel, Codex.SearchTypes.RegisteredSearchTypes).Exclude(($t = { ntype: 38, t: Codex.IProjectSearchModel, n: "sm" }, ($t5 = { ntype: 10, t: System.Object, operand: ($t4 = Bridge.getMetadata(Codex.IReferencedProject).m[0], { ntype: 23, t: $t4.rt, expression: ($t3 = {"td":System.Linq.Enumerable,"a":2,"n":"First","is":true,"t":8,"pi":[{"n":"source","pt":System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject),"ps":0}],"tpc":1,"def":function (TSource, source) { return System.Linq.Enumerable.from(source).first(); },"rt":Codex.IReferencedProject,"p":[System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject)]}, { ntype: 6, t: $t3.rt, obj: null, method: $t3, args: Bridge.toList([{ ntype: 10, t: System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject), operand: ($t2 = Bridge.getMetadata(Codex.IProject).m[2], { ntype: 23, t: $t2.rt, expression: ($t1 = Bridge.getMetadata(Codex.IProjectSearchModel).m[0], { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), member: $t2 }) }]) }), member: $t4 }) }, { ntype: 18, t: Function, rt: $t5.t, body: $t5, p: Bridge.toList([$t]) })));
                    this.Commit = Codex.SearchType.Create(Codex.ICommitSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.CommitFiles = Codex.SearchType.Create(Codex.ICommitFilesSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.ProjectReference = Codex.SearchType.Create(Codex.IProjectReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Property = Codex.SearchType.Create(Codex.IPropertySearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.StoredFilter = Codex.SearchType.Create(Codex.IStoredFilter, Codex.SearchTypes.RegisteredSearchTypes);
                    this.RegisteredEntity = Codex.SearchType.Create(Codex.IRegisteredEntity, Codex.SearchTypes.RegisteredSearchTypes);
                }
            }
        }
    });

    Bridge.define("Codex.SerializationInterfaceAttribute", {
        inherits: [System.Attribute],
        fields: {
            Type: null
        },
        ctors: {
            ctor: function (type) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Type = type;
            }
        }
    });

    Bridge.define("Codex.Utilities.CollectionUtilities");

    Bridge.define("Codex.Utilities.CollectionUtilities.Empty$1", function (T) { return {
        statics: {
            fields: {
                List: null,
                Array: null
            },
            ctors: {
                init: function () {
                    this.List = new (System.Collections.Generic.List$1(T)).$ctor2(0);
                    this.Array = System.Array.init(0, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            }
        }
    }; });

    Bridge.define("Codex.Utilities.SerializationUtilities", {
        statics: {
            methods: {
                AssignDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return lastValue.v;
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                },
                RemoveDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return Bridge.getDefaultValue(T);
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.View.App", {
        inherits: [System.Windows.Application],
        main: function Main () {
            System.Windows.ApplicationHost.Current.System$Windows$IApplicationHost$Run($asm.$.Codex.View.App.f1);
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Application.ctor.call(this);
                // TODO: This should be configurable through build properties somehow
                Codex.View.CodexProvider.Instance = new Codex.View.Web.WebApiCodex("http://localhost:9491/api/codex/");
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/App.xaml"));
            }
        }
    });

    Bridge.ns("Codex.View.App", $asm.$);

    Bridge.apply($asm.$.Codex.View.App, {
        f1: function () {
            var application = new Codex.View.App();
            application.InitializeComponent();
            application.Run();
        }
    });

    Bridge.define("Codex.View.CodexProvider", {
        statics: {
            props: {
                Instance: null
            }
        }
    });

    /** @namespace Codex.View */

    /**
     * Interaction logic for MainWindow.xaml
     *
     * @public
     * @class Codex.View.MainWindow
     * @augments System.Windows.Window
     */
    Bridge.define("Codex.View.MainWindow", {
        inherits: [System.Windows.Window],
        fields: {
            SearchBox: null,
            SearchBoxAndImagesColumn: null,
            HeaderMenuColumn: null,
            SearchInfo: null,
            SearchResultsContainer: null
        },
        props: {
            CodexService: null
        },
        ctors: {
            init: function () {
                this.CodexService = Codex.View.CodexProvider.Instance;
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Window.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            Button_Click: function (sender, e) { },
            Grid_Loaded: function (sender, e) {
                System.Console.WriteLine("Grid_Loaded");
            },
            SearchTextChanged: function (sender, e) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $returnValue, 
                    searchString, 
                    result, 
                    $t, 
                    $async_e, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([1,2,3,4], $step);
                                switch ($step) {

                                    case 1: {
                                        searchString = this.SearchBox.Text;
                                        searchString = searchString.trim();

                                        if (searchString.length < 3) {
                                            this.SearchInfo.Text = "Enter at least 3 characters.";
                                            $step = 3;
                                            continue;
                                        }

                                        $task1 = this.CodexService.Codex$Sdk$Search$ICodex$SearchAsync(($t = new Codex.Sdk.Search.SearchArguments(), $t.SearchString = searchString, $t));
                                        $step = 2;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        result = $taskResult1;

                                        if (result.Error != null) {
                                            this.SearchInfo.Text = result.Error;
                                            $step = 3;
                                            continue;
                                        } else if ((($t = result.Result) != null ? $t.Hits : null) == null || System.Array.getCount(result.Result.Hits, Codex.Sdk.Search.ISearchResult) === 0) {
                                            this.SearchInfo.Text = "No results found.";
                                            $step = 3;
                                            continue;
                                        }

                                        this.SearchInfo.Text = "";

                                        //Console.WriteLine("Search result");
                                        //Console.WriteLine(result.ToString());
                                        $step = 3;
                                        continue;
                                    }
                                    case 3: {
                                        if (System.String.isNullOrEmpty(this.SearchInfo.Text)) {
                                            this.SearchResultsContainer.Visibility = System.Windows.Visibility.Visible;
                                            this.SearchInfo.Visibility = System.Windows.Visibility.Collapsed;
                                        } else {
                                            this.SearchResultsContainer.Visibility = System.Windows.Visibility.Collapsed;
                                            this.SearchInfo.Visibility = System.Windows.Visibility.Visible;
                                        }

                                        if ($jumpFromFinally > -1) {
                                            $step = $jumpFromFinally;
                                            $jumpFromFinally = null;
                                        } else if ($async_e) {
                                            throw $async_e;
                                            return;
                                        } else if (Bridge.isDefined($returnValue)) {
                                            $tcs.setResult($returnValue);
                                            return;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ($step >= 1 && $step <= 2) {
                                $step = 3;
                                $asyncBody();
                                return;
                            }
                            throw $async_e;
                        }
                    }, arguments);

                $asyncBody();
            },
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/MainWindow.xaml"));
            }
        }
    });

    /**
     * Interaction logic for SearchResults.xaml
     *
     * @public
     * @class Codex.View.SearchResults
     * @augments System.Windows.Controls.UserControl
     */
    Bridge.define("Codex.View.SearchResults", {
        inherits: [System.Windows.Controls.UserControl],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Controls.UserControl.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/SearchResults.xaml"));
            }
        }
    });

    Bridge.define("Codex.View.Shared.FileItemResultViewModel");

    Bridge.define("Codex.View.Shared.ProjectItemResultViewModel");

    Bridge.define("Codex.View.Shared.ProjectResultsViewModel", {
        props: {
            ProjectName: null,
            Items: null
        }
    });

    Bridge.define("Codex.View.Web.Compatibility.Reference", {
        statics: {
            fields: {
                GranularPresentationGenericReference: null,
                JQueryReference: null
            }
        }
    });

    Bridge.define("System.CompatibilityExtensions", {
        statics: {
            methods: {
                ToLowerInvariant: function (value) {
                    return value.toLowerCase();
                }
            }
        }
    });

    Bridge.define("Codex.EntityBase", {
        inherits: [Codex.ISerializableEntity],
        methods: {
            Initialize: function () { },
            OnSerializingCore: function () { },
            OnDeserializedCore: function () { },
            Codex$ISerializableEntity$OnSerializing: function () {
                this.OnSerializingCore();
            },
            Codex$ISerializableEntity$OnDeserialized: function () {
                this.OnDeserializedCore();
            }
        }
    });

    Bridge.define("Codex.IProjectScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepoFileScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceSearchModelBase", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a classified span of text
     *
     * @abstract
     * @public
     * @class Codex.IClassificationSpan
     * @implements  Codex.ISpan
     */
    Bridge.define("Codex.IClassificationSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a changed file in a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitChangedFile
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitChangedFile", {
        inherits: [Codex.ICommitFileLink],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * // Keywords are additional terms which can be used to find a given symbol.
    // NOTE: Keywords can only be used to select from symbols which have
    // a primary term match
    //
     *
     * @abstract
     * @public
     * @class Codex.IDefinitionSearchModel
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IDefinitionSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSymbol", {
        inherits: [Codex.ICodeSymbol],
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ILineSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @abstract
     * @public
     * @class Codex.IRegisteredEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IRegisteredEntity", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositorySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @abstract
     * @public
     * @class Codex.IStoredFilter
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IStoredFilter", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Documentation for typed parameter
     *
     * @abstract
     * @public
     * @class Codex.ITypedParameterDocumentation
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ITypedParameterDocumentation", {
        inherits: [Codex.IParameterDocumentation],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.PropertyMapBase", {
        inherits: [System.Collections.Generic.Dictionary$2(System.String,System.String)]
    });

    Bridge.define("Codex.Sdk.Search.BinaryFilter$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexFilter$1(T)],
        fields: {
            Operator: 0,
            Left: null,
            Right: null
        },
        ctors: {
            ctor: function (op, left, right) {
                this.$initialize();
                Codex.Sdk.Search.IndexFilter$1(T).ctor.call(this);
                this.Operator = op;
                this.Left = left;
                this.Right = right;
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.ContextCodexArgumentsBase", {
        inherits: [Codex.Sdk.Search.CodexArgumentsBase],
        fields: {
            /**
             * The id of the repository referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @type string
             */
            ReferencingRepositoryId: null,
            /**
             * The id of the project referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @type string
             */
            ReferencingProjectId: null,
            /**
             * The id of the file referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @type string
             */
            ReferencingFileId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.FullTextIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse],
        props: {
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse$1
             * @function Result
             * @type T
             */
            Result: Bridge.getDefaultValue(T)
        },
        methods: {
            toString: function () {
                return System.String.format("Result: {0}, {1}", this.Result, Codex.Sdk.Search.IndexQueryResponse.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.definei("Codex.Sdk.Search.IPrefixProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.ITermProperty$1(T)],
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.NormalizedKeywordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixFullNameIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.SortwordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.SearchType$1", function (TSearchType) { return {
        inherits: [Codex.SearchType],
        fields: {
            CopyToFields: null,
            InheritFields: null
        },
        props: {
            Type: {
                get: function () {
                    return TSearchType;
                }
            }
        },
        ctors: {
            init: function () {
                this.CopyToFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
                this.InheritFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
            },
            ctor: function (name) {
                this.$initialize();
                Codex.SearchType.ctor.call(this);
                this.Name = name;
                this.IndexName = System.CompatibilityExtensions.ToLowerInvariant(this.Name);
            }
        },
        methods: {
            Inherit: function (T, providerField, searchField) {
                return this;
            },
            CopyTo: function (sourceField, targetField) {
                return this;
            },
            Exclude: function (searchField) {
                return this;
            },
            SearchAs: function (T, searchField, behavior) {
                return this;
            }
        }
    }; });

    Bridge.define("Codex.View.Shared.FileResultsViewModel", {
        inherits: [Codex.View.Shared.ProjectItemResultViewModel],
        props: {
            Path: null,
            Items: null
        }
    });

    Bridge.define("Codex.View.Shared.TextResultViewModel", {
        inherits: [Codex.View.Shared.FileItemResultViewModel],
        props: {
            SearchResult: null
        },
        ctors: {
            ctor: function (result) {
                this.$initialize();
                Codex.View.Shared.FileItemResultViewModel.ctor.call(this);
                this.SearchResult = result;
            }
        }
    });

    Bridge.define("Codex.View.Web.WebApiCodex", {
        inherits: [Codex.Sdk.Search.ICodex],
        fields: {
            baseUrl: null
        },
        alias: [
            "FindAllReferencesAsync", "Codex$Sdk$Search$ICodex$FindAllReferencesAsync",
            "FindDefinitionAsync", "Codex$Sdk$Search$ICodex$FindDefinitionAsync",
            "FindDefinitionLocationAsync", "Codex$Sdk$Search$ICodex$FindDefinitionLocationAsync",
            "GetSourceAsync", "Codex$Sdk$Search$ICodex$GetSourceAsync",
            "SearchAsync", "Codex$Sdk$Search$ICodex$SearchAsync"
        ],
        ctors: {
            ctor: function (baseUrl) {
                this.$initialize();
                this.baseUrl = System.String.endsWith(baseUrl, "/") ? baseUrl : (baseUrl || "") + String.fromCharCode(47);
            }
        },
        methods: {
            FindAllReferencesAsync: function ($arguments) {
                return this.PostAsync(Bridge.global.Codex.Sdk.Search.FindAllReferencesArguments, Bridge.global.Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IReferenceSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindAllRefs, $arguments, function (c) {
                    return c.Codex$Sdk$Search$ICodex$FindAllReferencesAsync($arguments);
                });
            },
            FindDefinitionAsync: function ($arguments) {
                return this.PostAsync(Bridge.global.Codex.Sdk.Search.FindDefinitionArguments, Bridge.global.Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IDefinitionSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindDef, $arguments, function (c) {
                    return c.Codex$Sdk$Search$ICodex$FindDefinitionAsync($arguments);
                });
            },
            FindDefinitionLocationAsync: function ($arguments) {
                return this.PostAsync(Bridge.global.Codex.Sdk.Search.FindDefinitionLocationArguments, Bridge.global.Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IReferenceSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindDefLocation, $arguments, function (c) {
                    return c.Codex$Sdk$Search$ICodex$FindDefinitionLocationAsync($arguments);
                });
            },
            GetSourceAsync: function ($arguments) {
                return this.PostAsync(Bridge.global.Codex.Sdk.Search.GetSourceArguments, Bridge.global.Codex.Sdk.Search.IndexQueryResponse$1(Codex.IBoundSourceSearchModel), Codex.Sdk.Search.CodexServiceMethod.GetSource, $arguments, function (c) {
                    return c.Codex$Sdk$Search$ICodex$GetSourceAsync($arguments);
                });
            },
            SearchAsync: function ($arguments) {
                return this.PostAsync(Bridge.global.Codex.Sdk.Search.SearchArguments, Bridge.global.Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.Sdk.Search.ISearchResult), Codex.Sdk.Search.CodexServiceMethod.Search, $arguments, function (c) {
                    return c.Codex$Sdk$Search$ICodex$SearchAsync($arguments);
                });
            },
            PostAsync: function (TArguments, TResult, searchMethod, $arguments, func) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                var url = (this.baseUrl || "") + (System.Enum.toString(Codex.Sdk.Search.CodexServiceMethod, searchMethod) || "");
                System.Console.WriteLine(url);

                var argumentsData = Newtonsoft.Json.JsonConvert.SerializeObject($arguments);

                var config = { url: url, type: "POST", data: argumentsData, contentType: "application/json; charset=utf-8", success: function (data, textStatus, successRequest) {
                    tcs.setResult(Newtonsoft.Json.JsonConvert.DeserializeObject(successRequest.responseText, TResult));
                    return null;
                }, error: function (errorRequest, textStatus, errorThrown) {
                    var $t;
                    tcs.setResult(($t = new TResult(), $t.Error = System.String.format("Error: {0}", errorThrown), $t));

                    return null;
                } };

                jQuery.ajax(config);

                return tcs.task;
            }
        }
    });

    Bridge.define("Codex.IProjectFileScopeEntity", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IBoundSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    /**
     * Describes a commit in version control
     *
     * @abstract
     * @public
     * @class Codex.ICommit
     * @implements  Codex.ICommitScopeEntity
     */
    Bridge.define("Codex.ICommit", {
        inherits: [Codex.ICommitScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a directory in source control
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesDirectory
     * @implements  Codex.IRepoFileScopeEntity
     */
    Bridge.define("Codex.ICommitFilesDirectory", {
        inherits: [Codex.IRepoFileScopeEntity],
        $kind: "interface"
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesSearchModel
     * @implements  Codex.ICommitScopeEntity
     * @implements  Codex.IRepoScopeEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ICommitFilesSearchModel", {
        inherits: [Codex.ICommitScopeEntity,Codex.IRepoScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationReferenceSymbol
     * @implements  Codex.IReferenceSymbol
     */
    Bridge.define("Codex.IDocumentationReferenceSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterDefinitionSpan
     * @implements  Codex.ILineSpan
     */
    Bridge.define("Codex.IParameterDefinitionSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextLineSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProject", {
        inherits: [Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectReferenceSearchModel", {
        inherits: [Codex.IProjectScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.RepoScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IRepoScopeEntity],
        fields: {
            m_RepositoryName: null
        },
        props: {
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: ["RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepoScopeEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @public
     * @class Codex.ObjectModel.SearchEntity
     * @augments Codex.EntityBase
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ObjectModel.SearchEntity", {
        inherits: [Codex.EntityBase,Codex.ISearchEntity],
        fields: {
            m_Uid: null,
            m_EntityContentId: null,
            m_EntityContentSize: 0,
            m_EntityVersion: null,
            m_ShardStableId: System.Int64(0)
        },
        props: {
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * Defines the content addressable identifier for the entity. This is used
             to determine if an entity with the same {@link } should be updated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentId
             * @type string
             */
            EntityContentId: {
                get: function () {
                    return this.m_EntityContentId;
                },
                set: function (value) {
                    this.m_EntityContentId = value;
                }
            },
            /**
             * Defines the size of the raw serialized entity.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentSize
             * @type number
             */
            EntityContentSize: {
                get: function () {
                    return this.m_EntityContentSize;
                },
                set: function (value) {
                    this.m_EntityContentSize = value;
                }
            },
            /**
             * The version number used when storing the entity (for use by ElasticSearch concurrency control
             to prevent races when storing values)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityVersion
             * @type ?number
             */
            EntityVersion: {
                get: function () {
                    return this.m_EntityVersion;
                },
                set: function (value) {
                    this.m_EntityVersion = value;
                }
            },
            /**
             * The per-shard stable identity (derived from ElasticSearch sequence number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function ShardStableId
             * @type number
             */
            ShardStableId: {
                get: function () {
                    return this.m_ShardStableId;
                },
                set: function (value) {
                    this.m_ShardStableId = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$ISearchEntity$Uid",
            "EntityContentId", "Codex$ISearchEntity$EntityContentId",
            "EntityContentSize", "Codex$ISearchEntity$EntityContentSize",
            "EntityVersion", "Codex$ISearchEntity$EntityVersion",
            "ShardStableId", "Codex$ISearchEntity$ShardStableId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SearchEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Uid = value.Codex$ISearchEntity$Uid;
                this.m_EntityContentId = value.Codex$ISearchEntity$EntityContentId;
                this.m_EntityContentSize = value.Codex$ISearchEntity$EntityContentSize;
                this.m_EntityVersion = value.Codex$ISearchEntity$EntityVersion;
                this.m_ShardStableId = value.Codex$ISearchEntity$ShardStableId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Describes a branch in a repository
     *
     * @public
     * @class Codex.ObjectModel.Branch
     * @augments Codex.EntityBase
     * @implements  Codex.IBranch
     */
    Bridge.define("Codex.ObjectModel.Branch", {
        inherits: [Codex.EntityBase,Codex.IBranch],
        fields: {
            m_Name: null,
            m_Description: null,
            m_HeadCommitId: null
        },
        props: {
            /**
             * The name of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The branch description
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The head commit of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function HeadCommitId
             * @type string
             */
            HeadCommitId: {
                get: function () {
                    return this.m_HeadCommitId;
                },
                set: function (value) {
                    this.m_HeadCommitId = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IBranch$Name",
            "Description", "Codex$IBranch$Description",
            "HeadCommitId", "Codex$IBranch$HeadCommitId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Branch, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IBranch$Name;
                this.m_Description = value.Codex$IBranch$Description;
                this.m_HeadCommitId = value.Codex$IBranch$HeadCommitId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Span", {
        inherits: [Codex.EntityBase,Codex.ISpan],
        fields: {
            m_Start: 0,
            m_Length: 0
        },
        props: {
            /**
             * The absolute character offset of the span within the document
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Start
             * @type number
             */
            Start: {
                get: function () {
                    return this.m_Start;
                },
                set: function (value) {
                    this.m_Start = value;
                }
            },
            /**
             * The length of the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Length
             * @type number
             */
            Length: {
                get: function () {
                    return this.m_Length;
                },
                set: function (value) {
                    this.m_Length = value;
                }
            },
            /**
             * The absolute character offset of the end (exclusive) of the span within the document
             *
             * @instance
             * @public
             * @readonly
             * @memberof Codex.ObjectModel.Span
             * @function End
             * @type number
             */
            End: {
                get: function () {
                    return ((this.Start + this.Length) | 0);
                }
            }
        },
        alias: [
            "Start", "Codex$ISpan$Start",
            "Length", "Codex$ISpan$Length"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Span, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Start = value.Codex$ISpan$Start;
                this.m_Length = value.Codex$ISpan$Length;
                return Bridge.cast((this), TTarget);
            },
            Contains: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start >= this.Start && span.End <= this.End;
            },
            SpanEquals: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start === this.Start && span.End === this.End;
            }
        }
    });

    /**
     * Describes styling for a given classification
     *
     * @public
     * @class Codex.ObjectModel.ClassificationStyle
     * @augments Codex.EntityBase
     * @implements  Codex.IClassificationStyle
     */
    Bridge.define("Codex.ObjectModel.ClassificationStyle", {
        inherits: [Codex.EntityBase,Codex.IClassificationStyle],
        fields: {
            m_Color: 0,
            m_Italic: false,
            m_Name: null
        },
        props: {
            /**
             * The default classification color for the classification. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Color
             * @type number
             */
            Color: {
                get: function () {
                    return this.m_Color;
                },
                set: function (value) {
                    this.m_Color = value;
                }
            },
            /**
             * Indicates whether the spans classified with this classification should have italic font by default
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Italic
             * @type boolean
             */
            Italic: {
                get: function () {
                    return this.m_Italic;
                },
                set: function (value) {
                    this.m_Italic = value;
                }
            },
            /**
             * The name of the classification
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "Color", "Codex$IClassificationStyle$Color",
            "Italic", "Codex$IClassificationStyle$Italic",
            "Name", "Codex$IClassificationStyle$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ClassificationStyle, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Color = value.Codex$IClassificationStyle$Color;
                this.m_Italic = value.Codex$IClassificationStyle$Italic;
                this.m_Name = value.Codex$IClassificationStyle$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReview", {
        inherits: [Codex.EntityBase,Codex.ICodeReview],
        fields: {
            m_Id: null,
            m_Description: null,
            m_Url: null,
            m_Status: 0
        },
        props: {
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * Url for accessing code review in source control management (i.e. GitHub or VSO)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReview
             * @function Url
             * @type string
             */
            Url: {
                get: function () {
                    return this.m_Url;
                },
                set: function (value) {
                    this.m_Url = value;
                }
            },
            Status: {
                get: function () {
                    return this.m_Status;
                },
                set: function (value) {
                    this.m_Status = value;
                }
            }
        },
        alias: [
            "Id", "Codex$ICodeReview$Id",
            "Description", "Codex$ICodeReview$Description",
            "Url", "Codex$ICodeReview$Url",
            "Status", "Codex$ICodeReview$Status"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReview, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Id = value.Codex$ICodeReview$Id;
                this.m_Description = value.Codex$ICodeReview$Description;
                this.m_Url = value.Codex$ICodeReview$Url;
                this.m_Status = value.Codex$ICodeReview$Status;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewComment", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewComment],
        fields: {
            m_Text: null,
            m_Reviewer: null,
            m_Importance: 0,
            m_CommentTime: null
        },
        props: {
            Text: {
                get: function () {
                    return this.m_Text;
                },
                set: function (value) {
                    this.m_Text = value;
                }
            },
            /**
             * The name of the reviewer which made the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Reviewer
             * @type string
             */
            Reviewer: {
                get: function () {
                    return this.m_Reviewer;
                },
                set: function (value) {
                    this.m_Reviewer = value;
                }
            },
            /**
             * The importance of the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Importance
             * @type Codex.CommentImportance
             */
            Importance: {
                get: function () {
                    return this.m_Importance;
                },
                set: function (value) {
                    this.m_Importance = value;
                }
            },
            /**
             * The time when the comment was submitted
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function CommentTime
             * @type System.DateTime
             */
            CommentTime: {
                get: function () {
                    return this.m_CommentTime;
                },
                set: function (value) {
                    this.m_CommentTime = value;
                }
            }
        },
        alias: [
            "Text", "Codex$ICodeReviewComment$Text",
            "Reviewer", "Codex$ICodeReviewComment$Reviewer",
            "Importance", "Codex$ICodeReviewComment$Importance",
            "CommentTime", "Codex$ICodeReviewComment$CommentTime"
        ],
        ctors: {
            init: function () {
                this.m_CommentTime = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewComment, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Text = value.Codex$ICodeReviewComment$Text;
                this.m_Reviewer = value.Codex$ICodeReviewComment$Reviewer;
                this.m_Importance = value.Codex$ICodeReviewComment$Importance;
                this.m_CommentTime = value.Codex$ICodeReviewComment$CommentTime;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewCommentThread", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewCommentThread],
        fields: {
            m_OriginalSpan: null,
            m_StartIteration: 0,
            m_LastUpdated: null,
            m_FileRepoRelativePath: null,
            m_Comments: null
        },
        props: {
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function Codex$ICodeReviewCommentThread$OriginalSpan
             * @type Codex.ILineSpan
             */
            Codex$ICodeReviewCommentThread$OriginalSpan: {
                get: function () {
                    return this.OriginalSpan;
                }
            },
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function OriginalSpan
             * @type Codex.ObjectModel.LineSpan
             */
            OriginalSpan: {
                get: function () {
                    return this.m_OriginalSpan;
                },
                set: function (value) {
                    this.m_OriginalSpan = value;
                }
            },
            /**
             * The iteration where the comment originated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The last tie
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function LastUpdated
             * @type System.DateTime
             */
            LastUpdated: {
                get: function () {
                    return this.m_LastUpdated;
                },
                set: function (value) {
                    this.m_LastUpdated = value;
                }
            },
            FileRepoRelativePath: {
                get: function () {
                    return this.m_FileRepoRelativePath;
                },
                set: function (value) {
                    this.m_FileRepoRelativePath = value;
                }
            },
            Codex$ICodeReviewCommentThread$Comments: {
                get: function () {
                    return this.Comments;
                }
            },
            Comments: {
                get: function () {
                    return this.m_Comments;
                },
                set: function (value) {
                    this.m_Comments = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewCommentThread$StartIteration",
            "LastUpdated", "Codex$ICodeReviewCommentThread$LastUpdated",
            "FileRepoRelativePath", "Codex$ICodeReviewCommentThread$FileRepoRelativePath"
        ],
        ctors: {
            init: function () {
                this.m_LastUpdated = System.DateTime.getDefaultValue();
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewCommentThread, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_OriginalSpan = new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, value.Codex$ICodeReviewCommentThread$OriginalSpan);
                this.m_StartIteration = value.Codex$ICodeReviewCommentThread$StartIteration;
                this.m_LastUpdated = value.Codex$ICodeReviewCommentThread$LastUpdated;
                this.m_FileRepoRelativePath = value.Codex$ICodeReviewCommentThread$FileRepoRelativePath;
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewCommentThread$Comments).select($asm.$.Codex.ObjectModel.CodeReviewCommentThread.f1));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewCommentThread", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewCommentThread, {
        f1: function (v) {
            return new Codex.ObjectModel.CodeReviewComment.ctor().CopyFrom(Codex.ObjectModel.CodeReviewComment, v);
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewerInfo", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewerInfo],
        fields: {
            m_Name: null
        },
        props: {
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: ["Name", "Codex$ICodeReviewerInfo$Name"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewerInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ICodeReviewerInfo$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewFile", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewFile],
        fields: {
            m_StartIteration: 0,
            m_RepoRelativePath: null,
            m_FileId: null,
            m_BaselineFileId: null,
            m_ChangeKind: 0
        },
        props: {
            /**
             * The first iteration in which this file appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The relative path in the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The file id of the new version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * The file id of the baseline version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function BaselineFileId
             * @type string
             */
            BaselineFileId: {
                get: function () {
                    return this.m_BaselineFileId;
                },
                set: function (value) {
                    this.m_BaselineFileId = value;
                }
            },
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewFile$StartIteration",
            "RepoRelativePath", "Codex$ICodeReviewFile$RepoRelativePath",
            "FileId", "Codex$ICodeReviewFile$FileId",
            "BaselineFileId", "Codex$ICodeReviewFile$BaselineFileId",
            "ChangeKind", "Codex$ICodeReviewFile$ChangeKind"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_StartIteration = value.Codex$ICodeReviewFile$StartIteration;
                this.m_RepoRelativePath = value.Codex$ICodeReviewFile$RepoRelativePath;
                this.m_FileId = value.Codex$ICodeReviewFile$FileId;
                this.m_BaselineFileId = value.Codex$ICodeReviewFile$BaselineFileId;
                this.m_ChangeKind = value.Codex$ICodeReviewFile$ChangeKind;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewIteration", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewIteration],
        fields: {
            m_IterationNumber: 0,
            m_ReviewId: null,
            m_Description: null,
            m_Files: null
        },
        props: {
            IterationNumber: {
                get: function () {
                    return this.m_IterationNumber;
                },
                set: function (value) {
                    this.m_IterationNumber = value;
                }
            },
            ReviewId: {
                get: function () {
                    return this.m_ReviewId;
                },
                set: function (value) {
                    this.m_ReviewId = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Codex$ICodeReviewIteration$Files: {
                get: function () {
                    return this.Files;
                }
            },
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        alias: [
            "IterationNumber", "Codex$ICodeReviewIteration$IterationNumber",
            "ReviewId", "Codex$ICodeReviewIteration$ReviewId",
            "Description", "Codex$ICodeReviewIteration$Description"
        ],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewIteration, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_IterationNumber = value.Codex$ICodeReviewIteration$IterationNumber;
                this.m_ReviewId = value.Codex$ICodeReviewIteration$ReviewId;
                this.m_Description = value.Codex$ICodeReviewIteration$Description;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewIteration$Files).select($asm.$.Codex.ObjectModel.CodeReviewIteration.f1));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewIteration", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewIteration, {
        f1: function (v) {
            return new Codex.ObjectModel.CodeReviewFile.ctor().CopyFrom(Codex.ObjectModel.CodeReviewFile, v);
        }
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitFileLink
     * @augments Codex.EntityBase
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ObjectModel.CommitFileLink", {
        inherits: [Codex.EntityBase,Codex.ICommitFileLink],
        fields: {
            m_RepoRelativePath: null,
            m_FileId: null,
            m_VersionControlFileId: null
        },
        props: {
            /**
             * The relative path in the repository to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * Unique identifer for file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * Unique identifer for file content as determined by version control
             (i.e. the blob hash)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function VersionControlFileId
             * @type string
             */
            VersionControlFileId: {
                get: function () {
                    return this.m_VersionControlFileId;
                },
                set: function (value) {
                    this.m_VersionControlFileId = value;
                }
            }
        },
        alias: [
            "RepoRelativePath", "Codex$ICommitFileLink$RepoRelativePath",
            "FileId", "Codex$ICommitFileLink$FileId",
            "VersionControlFileId", "Codex$ICommitFileLink$VersionControlFileId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CommitFileLink, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$ICommitFileLink$RepoRelativePath;
                this.m_FileId = value.Codex$ICommitFileLink$FileId;
                this.m_VersionControlFileId = value.Codex$ICommitFileLink$VersionControlFileId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Symbol", {
        inherits: [Codex.EntityBase,Codex.ICodeSymbol],
        fields: {
            m_ProjectId: null,
            m_Id: null,
            m_Kind: null
        },
        props: {
            /**
             * The identifier of the project in which the symbol appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The identifier for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Id
             * @type Codex.ObjectModel.SymbolId
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            /**
             * The symbol kind. (i.e. interface, method, field)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Kind
             * @type string
             */
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Extension data used during analysis/search
             TODO: Why is this needed?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ExtData
             * @type Codex.ObjectModel.ExtensionData
             */
            ExtData: null
        },
        alias: [
            "ProjectId", "Codex$ICodeSymbol$ProjectId",
            "Id", "Codex$ICodeSymbol$Id",
            "Kind", "Codex$ICodeSymbol$Kind"
        ],
        ctors: {
            init: function () {
                this.m_Id = new Codex.ObjectModel.SymbolId();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Symbol, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$ICodeSymbol$ProjectId;
                this.m_Id = value.Codex$ICodeSymbol$Id;
                this.m_Kind = value.Codex$ICodeSymbol$Kind;
                return Bridge.cast((this), TTarget);
            },
            Equals: function (other) {
                return System.String.equals(this.ProjectId, other.ProjectId, 4) && System.String.equals(this.Id.Value, other.Id.Value, 4);
            },
            equals: function (obj) {
                if (Bridge.referenceEquals(null, obj)) {
                    return false;
                }
                if (Bridge.referenceEquals(this, obj)) {
                    return true;
                }
                if (!Bridge.referenceEquals(Bridge.getType(obj), Bridge.getType(this))) {
                    return false;
                }
                return this.Equals(Bridge.cast(obj, Codex.ObjectModel.Symbol));
            },
            getHashCode: function () {
                var $t, $t1, $t2, $t3;
                return (Bridge.Int.mul((($t = (($t1 = this.ProjectId) != null ? Bridge.getHashCode($t1) : null), $t != null ? $t : 0)), 397)) ^ (($t2 = (($t3 = this.Id.Value) != null ? Bridge.getHashCode($t3) : null), $t2 != null ? $t2 : 0));
            },
            toString: function () {
                return this.Id.Value;
            }
        }
    });

    /**
     * Defines documentation about a symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IDocumentationInfo
     */
    Bridge.define("Codex.ObjectModel.DocumentationInfo", {
        inherits: [Codex.EntityBase,Codex.IDocumentationInfo],
        fields: {
            m_DeclarationName: null,
            m_Comment: null,
            m_AssociatedSymbol: null,
            m_References: null,
            m_Summary: null,
            m_Remarks: null,
            m_Arguments: null,
            m_TypeParameters: null,
            m_Exceptions: null
        },
        props: {
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition (this is the raw doc comment text)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$AssociatedSymbol
             * @type Codex.ICodeSymbol
             */
            Codex$IDocumentationInfo$AssociatedSymbol: {
                get: function () {
                    return this.AssociatedSymbol;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function AssociatedSymbol
             * @type Codex.ObjectModel.Symbol
             */
            AssociatedSymbol: {
                get: function () {
                    return this.m_AssociatedSymbol;
                },
                set: function (value) {
                    this.m_AssociatedSymbol = value;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function References
             * @type System.Collections.Generic.List$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Describes the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Summary
             * @type string
             */
            Summary: {
                get: function () {
                    return this.m_Summary;
                },
                set: function (value) {
                    this.m_Summary = value;
                }
            },
            /**
             * Supplementation information about the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Remarks
             * @type string
             */
            Remarks: {
                get: function () {
                    return this.m_Remarks;
                },
                set: function (value) {
                    this.m_Remarks = value;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Arguments
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Arguments: {
                get: function () {
                    return this.Arguments;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Arguments
             * @type System.Collections.Generic.List$1
             */
            Arguments: {
                get: function () {
                    return this.m_Arguments;
                },
                set: function (value) {
                    this.m_Arguments = value;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$TypeParameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$TypeParameters: {
                get: function () {
                    return this.TypeParameters;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function TypeParameters
             * @type System.Collections.Generic.List$1
             */
            TypeParameters: {
                get: function () {
                    return this.m_TypeParameters;
                },
                set: function (value) {
                    this.m_TypeParameters = value;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Exceptions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Exceptions: {
                get: function () {
                    return this.Exceptions;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Exceptions
             * @type System.Collections.Generic.List$1
             */
            Exceptions: {
                get: function () {
                    return this.m_Exceptions;
                },
                set: function (value) {
                    this.m_Exceptions = value;
                }
            }
        },
        alias: [
            "DeclarationName", "Codex$IDocumentationInfo$DeclarationName",
            "Comment", "Codex$IDocumentationInfo$Comment",
            "Summary", "Codex$IDocumentationInfo$Summary",
            "Remarks", "Codex$IDocumentationInfo$Remarks"
        ],
        ctors: {
            init: function () {
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).ctor();
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).ctor();
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.DocumentationInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_DeclarationName = value.Codex$IDocumentationInfo$DeclarationName;
                this.m_Comment = value.Codex$IDocumentationInfo$Comment;
                this.m_AssociatedSymbol = new Codex.ObjectModel.Symbol.ctor().CopyFrom(Codex.ObjectModel.Symbol, value.Codex$IDocumentationInfo$AssociatedSymbol);
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$References).select($asm.$.Codex.ObjectModel.DocumentationInfo.f1));
                this.m_Summary = value.Codex$IDocumentationInfo$Summary;
                this.m_Remarks = value.Codex$IDocumentationInfo$Remarks;
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Arguments).select($asm.$.Codex.ObjectModel.DocumentationInfo.f2));
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$TypeParameters).select($asm.$.Codex.ObjectModel.DocumentationInfo.f3));
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Exceptions).select($asm.$.Codex.ObjectModel.DocumentationInfo.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DocumentationInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DocumentationInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.TypedParameterDocumentation.ctor().CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.ParameterDocumentation.ctor().CopyFrom(Codex.ObjectModel.ParameterDocumentation, v);
        }
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @public
     * @class Codex.ObjectModel.EncodingDescription
     * @augments Codex.EntityBase
     * @implements  Codex.IEncodingDescription
     */
    Bridge.define("Codex.ObjectModel.EncodingDescription", {
        inherits: [Codex.EntityBase,Codex.IEncodingDescription],
        fields: {
            m_Name: null,
            m_Preamble: null
        },
        props: {
            /**
             * The name of the encoding
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The encoding preamble
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Preamble
             * @type Array.<number>
             */
            Preamble: {
                get: function () {
                    return this.m_Preamble;
                },
                set: function (value) {
                    this.m_Preamble = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IEncodingDescription$Name",
            "Preamble", "Codex$IEncodingDescription$Preamble"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.EncodingDescription, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IEncodingDescription$Name;
                this.m_Preamble = value.Codex$IEncodingDescription$Preamble;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.FileStatistics", {
        inherits: [Codex.EntityBase,Codex.IFileStatistics],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.FileStatistics, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Index", {
        inherits: [Codex.EntityBase,Codex.Sdk.Search.IIndex],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Index, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageInfo", {
        inherits: [Codex.EntityBase,Codex.ILanguageInfo],
        fields: {
            m_Name: null,
            m_Classifications: null
        },
        props: {
            /**
             * The name of the language
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Codex$ILanguageInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ILanguageInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Classifications
             * @type System.Collections.Generic.List$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            }
        },
        alias: ["Name", "Codex$ILanguageInfo$Name"],
        ctors: {
            init: function () {
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.LanguageInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ILanguageInfo$Name;
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).$ctor1(System.Linq.Enumerable.from(value.Codex$ILanguageInfo$Classifications).select($asm.$.Codex.ObjectModel.LanguageInfo.f1));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.LanguageInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.LanguageInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.ClassificationStyle.ctor().CopyFrom(Codex.ObjectModel.ClassificationStyle, v);
        }
    });

    Bridge.define("Codex.ObjectModel.OutliningRegion", {
        inherits: [Codex.EntityBase,Codex.IOutliningRegion],
        fields: {
            m_Kind: null,
            m_Header: null,
            m_Content: null
        },
        props: {
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Header
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Header: {
                get: function () {
                    return this.Header;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Header
             * @type Codex.ObjectModel.LineSpan
             */
            Header: {
                get: function () {
                    return this.m_Header;
                },
                set: function (value) {
                    this.m_Header = value;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Content
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Content: {
                get: function () {
                    return this.Content;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Content
             * @type Codex.ObjectModel.LineSpan
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            }
        },
        alias: ["Kind", "Codex$IOutliningRegion$Kind"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.OutliningRegion, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Kind = value.Codex$IOutliningRegion$Kind;
                this.m_Header = new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, value.Codex$IOutliningRegion$Header);
                this.m_Content = new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, value.Codex$IOutliningRegion$Content);
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Documentation for a method parameter
     *
     * @public
     * @class Codex.ObjectModel.ParameterDocumentation
     * @augments Codex.EntityBase
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.ParameterDocumentation", {
        inherits: [Codex.EntityBase,Codex.IParameterDocumentation],
        fields: {
            m_Name: null,
            m_Comment: null
        },
        props: {
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The comment associated with the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IParameterDocumentation$Name",
            "Comment", "Codex$IParameterDocumentation$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ParameterDocumentation, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IParameterDocumentation$Name;
                this.m_Comment = value.Codex$IParameterDocumentation$Comment;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.PropertyMap", {
        inherits: [Codex.ObjectModel.PropertyMapBase,Codex.IPropertyMap],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.PropertyMap, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () { }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferencedProject", {
        inherits: [Codex.EntityBase,Codex.IReferencedProject],
        fields: {
            m_ProjectId: null,
            m_Definitions: null,
            m_DisplayName: null,
            m_Properties: null
        },
        props: {
            /**
             * The identifier of the referenced project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferencedProject$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * The display name of the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Properties
             * @type Codex.IPropertyMap
             */
            Codex$IReferencedProject$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IReferencedProject$ProjectId",
            "DisplayName", "Codex$IReferencedProject$DisplayName"
        ],
        ctors: {
            init: function () {
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ReferencedProject, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IReferencedProject$ProjectId;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferencedProject$Definitions).select($asm.$.Codex.ObjectModel.ReferencedProject.f1));
                this.m_DisplayName = value.Codex$IReferencedProject$DisplayName;
                this.m_Properties = new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, value.Codex$IReferencedProject$Properties);
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                var $t;
                return ($t = this.DisplayName, $t != null ? $t : this.ProjectId);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferencedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferencedProject, {
        f1: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        }
    });

    Bridge.define("Codex.ObjectModel.Repository", {
        inherits: [Codex.EntityBase,Codex.IRepository],
        fields: {
            m_Name: null,
            m_Description: null,
            m_Id: null,
            m_WebAddress: null,
            m_SourceControlWebAddress: null,
            m_FileWebAddressTransformInputRegex: null,
            m_PrimaryBranch: null,
            m_RepositoryReferences: null
        },
        props: {
            /**
             * The name fo the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The web address for source control of the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function SourceControlWebAddress
             * @type string
             */
            SourceControlWebAddress: {
                get: function () {
                    return this.m_SourceControlWebAddress;
                },
                set: function (value) {
                    this.m_SourceControlWebAddress = value;
                }
            },
            /**
             * The regex for extracting
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function FileWebAddressTransformInputRegex
             * @type string
             */
            FileWebAddressTransformInputRegex: {
                get: function () {
                    return this.m_FileWebAddressTransformInputRegex;
                },
                set: function (value) {
                    this.m_FileWebAddressTransformInputRegex = value;
                }
            },
            /**
             * The name of the primary branch for the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function PrimaryBranch
             * @type string
             */
            PrimaryBranch: {
                get: function () {
                    return this.m_PrimaryBranch;
                },
                set: function (value) {
                    this.m_PrimaryBranch = value;
                }
            },
            Codex$IRepository$RepositoryReferences: {
                get: function () {
                    return this.RepositoryReferences;
                }
            },
            RepositoryReferences: {
                get: function () {
                    return this.m_RepositoryReferences;
                },
                set: function (value) {
                    this.m_RepositoryReferences = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepository$Name",
            "Description", "Codex$IRepository$Description",
            "Id", "Codex$IRepository$Id",
            "WebAddress", "Codex$IRepository$WebAddress",
            "SourceControlWebAddress", "Codex$IRepository$SourceControlWebAddress",
            "FileWebAddressTransformInputRegex", "Codex$IRepository$FileWebAddressTransformInputRegex",
            "PrimaryBranch", "Codex$IRepository$PrimaryBranch"
        ],
        ctors: {
            init: function () {
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Repository, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepository$Name;
                this.m_Description = value.Codex$IRepository$Description;
                this.m_Id = value.Codex$IRepository$Id;
                this.m_WebAddress = value.Codex$IRepository$WebAddress;
                this.m_SourceControlWebAddress = value.Codex$IRepository$SourceControlWebAddress;
                this.m_FileWebAddressTransformInputRegex = value.Codex$IRepository$FileWebAddressTransformInputRegex;
                this.m_PrimaryBranch = value.Codex$IRepository$PrimaryBranch;
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).$ctor1(System.Linq.Enumerable.from(value.Codex$IRepository$RepositoryReferences).select($asm.$.Codex.ObjectModel.Repository.f1));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Repository", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Repository, {
        f1: function (v) {
            return new Codex.ObjectModel.RepositoryReference.ctor().CopyFrom(Codex.ObjectModel.RepositoryReference, v);
        }
    });

    Bridge.define("Codex.ObjectModel.RepositoryReference", {
        inherits: [Codex.EntityBase,Codex.IRepositoryReference],
        fields: {
            m_Name: null,
            m_Id: null
        },
        props: {
            /**
             * The name of the reference repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Optional. Id of repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Id
             * @type string
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepositoryReference$Name",
            "Id", "Codex$IRepositoryReference$Id"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryReference, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepositoryReference$Name;
                this.m_Id = value.Codex$IRepositoryReference$Id;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @public
     * @class Codex.ObjectModel.RepositoryStoreInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.ObjectModel.RepositoryStoreInfo", {
        inherits: [Codex.EntityBase,Codex.IRepositoryStoreInfo],
        fields: {
            m_Repository: null,
            m_Branch: null,
            m_Commit: null
        },
        props: {
            /**
             * The repository being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Repository
             * @type Codex.IRepository
             */
            Codex$IRepositoryStoreInfo$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            /**
             * The repository being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Repository
             * @type Codex.ObjectModel.Repository
             */
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Branch
             * @type Codex.IBranch
             */
            Codex$IRepositoryStoreInfo$Branch: {
                get: function () {
                    return this.Branch;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Branch
             * @type Codex.ObjectModel.Branch
             */
            Branch: {
                get: function () {
                    return this.m_Branch;
                },
                set: function (value) {
                    this.m_Branch = value;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Commit
             * @type Codex.ICommit
             */
            Codex$IRepositoryStoreInfo$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Commit
             * @type Codex.ObjectModel.Commit
             */
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryStoreInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Repository = new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, value.Codex$IRepositoryStoreInfo$Repository);
                this.m_Branch = new Codex.ObjectModel.Branch.ctor().CopyFrom(Codex.ObjectModel.Branch, value.Codex$IRepositoryStoreInfo$Branch);
                this.m_Commit = new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, value.Codex$IRepositoryStoreInfo$Commit);
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @public
     * @class Codex.ObjectModel.SourceControlFileInfo
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ObjectModel.SourceControlFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceControlFileInfo],
        fields: {
            m_SourceControlContentId: null
        },
        props: {
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceControlFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            }
        },
        alias: ["SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceControlFileInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @public
     * @class Codex.ObjectModel.SourceFile
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceFile
     */
    Bridge.define("Codex.ObjectModel.SourceFile", {
        inherits: [Codex.EntityBase,Codex.ISourceFile],
        fields: {
            m_Info: null,
            m_Content: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFile
             * @function Codex$ISourceFile$Info
             * @type Codex.ISourceFileInfo
             */
            Codex$ISourceFile$Info: {
                get: function () {
                    return this.Info;
                }
            },
            /**
             * The information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Info
             * @type Codex.ObjectModel.SourceFileInfo
             */
            Info: {
                get: function () {
                    return this.m_Info;
                },
                set: function (value) {
                    this.m_Info = value;
                }
            },
            /**
             * The content of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Content
             * @type string
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "Content", "Codex$ISourceFile$Content",
            "ExcludeFromSearch", "Codex$ISourceFile$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Info = new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, value.Codex$ISourceFile$Info);
                this.m_Content = value.Codex$ISourceFile$Content;
                this.m_ExcludeFromSearch = value.Codex$ISourceFile$ExcludeFromSearch;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.StoredBoundSourceFile", {
        inherits: [Codex.EntityBase,Codex.IStoredBoundSourceFile],
        fields: {
            m_BoundSourceFile: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null
        },
        props: {
            Codex$IStoredBoundSourceFile$BoundSourceFile: {
                get: function () {
                    return this.BoundSourceFile;
                }
            },
            BoundSourceFile: {
                get: function () {
                    return this.m_BoundSourceFile;
                },
                set: function (value) {
                    this.m_BoundSourceFile = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            }
        },
        alias: [
            "CompressedClassifications", "Codex$IStoredBoundSourceFile$CompressedClassifications",
            "CompressedReferences", "Codex$IStoredBoundSourceFile$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.StoredBoundSourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_BoundSourceFile = new Codex.ObjectModel.BoundSourceFile.ctor().CopyFrom$5(Codex.ObjectModel.BoundSourceFile, value.Codex$IStoredBoundSourceFile$BoundSourceFile);
                this.m_CompressedClassifications = value.Codex$IStoredBoundSourceFile$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IStoredBoundSourceFile$CompressedReferences;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.FindSymbolArgumentsBase", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        fields: {
            /**
             * The symbol id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @type string
             */
            SymbolId: null,
            /**
             * The project id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @type string
             */
            ProjectId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.GetSourceArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.IndexQueryHitsResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse$1(Codex.Sdk.Search.IndexQueryHits$1(T))]
    }; });

    Bridge.define("Codex.Sdk.Search.SearchArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        fields: {
            SearchString: null
        }
    });

    Bridge.define("Codex.IBoundSourceInfo", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolSpan", {
        inherits: [Codex.ITextLineSpan],
        $kind: "interface"
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @abstract
     * @public
     * @class Codex.IProjectFileLink
     * @implements  Codex.IProjectFileScopeEntity
     */
    Bridge.define("Codex.IProjectFileLink", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSearchModel", {
        inherits: [Codex.IProjectFileScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceFileInfo", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.ISourceControlFileInfo,Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.ProjectScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IProjectScopeEntity],
        fields: {
            m_ProjectId: null
        },
        props: {
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: ["ProjectId", "Codex$IProjectScopeEntity$ProjectId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectFileScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IProjectFileScopeEntity],
        fields: {
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.ProjectFileScopeEntity, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IBoundSourceSearchModel],
        fields: {
            m_TextUid: null,
            m_SourceInfo: null,
            m_BindingInfo: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null,
            m_SourceControlInfo: null
        },
        props: {
            /**
             * The unique identifier of the associated {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function TextUid
             * @type string
             */
            TextUid: {
                get: function () {
                    return this.m_TextUid;
                },
                set: function (value) {
                    this.m_TextUid = value;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$SourceInfo
             * @type Codex.ISourceFileInfo
             */
            Codex$IBoundSourceSearchModel$SourceInfo: {
                get: function () {
                    return this.SourceInfo;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceInfo
             * @type Codex.ObjectModel.SourceFileInfo
             */
            SourceInfo: {
                get: function () {
                    return this.m_SourceInfo;
                },
                set: function (value) {
                    this.m_SourceInfo = value;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$BindingInfo
             * @type Codex.IBoundSourceInfo
             */
            Codex$IBoundSourceSearchModel$BindingInfo: {
                get: function () {
                    return this.BindingInfo;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function BindingInfo
             * @type Codex.ObjectModel.BoundSourceInfo
             */
            BindingInfo: {
                get: function () {
                    return this.m_BindingInfo;
                },
                set: function (value) {
                    this.m_BindingInfo = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        alias: [
            "TextUid", "Codex$IBoundSourceSearchModel$TextUid",
            "CompressedClassifications", "Codex$IBoundSourceSearchModel$CompressedClassifications",
            "CompressedReferences", "Codex$IBoundSourceSearchModel$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.BoundSourceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.BoundSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_SourceControlInfo = new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, value.Codex$ISourceSearchModelBase$SourceControlInfo);
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_TextUid = value.Codex$IBoundSourceSearchModel$TextUid;
                this.m_SourceInfo = new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, value.Codex$IBoundSourceSearchModel$SourceInfo);
                this.m_BindingInfo = new Codex.ObjectModel.BoundSourceInfo.ctor().CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, value.Codex$IBoundSourceSearchModel$BindingInfo);
                this.m_CompressedClassifications = value.Codex$IBoundSourceSearchModel$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IBoundSourceSearchModel$CompressedReferences;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, Bridge.cast((value), Codex.ISourceSearchModelBase).Codex$ISourceSearchModelBase$SourceControlInfo);
                return Bridge.cast((this), TTarget);
            },
            OnDeserializedCore: function () {
                if (this.CompressedClassifications != null) {
                    this.BindingInfo.Classifications = this.CompressedClassifications.Codex$IClassificationList$ToList();
                }

                if (this.CompressedReferences != null) {
                    this.BindingInfo.References = this.CompressedReferences.Codex$IReferenceList$ToList();
                }

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                if (this.CompressedClassifications != null) {
                    this.BindingInfo.Classifications = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ClassificationSpan).Array;
                }

                if (this.CompressedReferences != null) {
                    this.BindingInfo.References = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ReferenceSpan).Array;
                }

                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            }
        }
    });

    /**
     * Defines a classified span of text
     *
     * @public
     * @class Codex.ObjectModel.ClassificationSpan
     * @augments Codex.ObjectModel.Span
     * @implements  Codex.IClassificationSpan
     */
    Bridge.define("Codex.ObjectModel.ClassificationSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IClassificationSpan],
        fields: {
            m_DefaultClassificationColor: 0,
            m_Classification: null,
            m_LocalGroupId: 0
        },
        props: {
            /**
             * The default classification color for the span. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function DefaultClassificationColor
             * @type number
             */
            DefaultClassificationColor: {
                get: function () {
                    return this.m_DefaultClassificationColor;
                },
                set: function (value) {
                    this.m_DefaultClassificationColor = value;
                }
            },
            /**
             * The classification identifier for the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function Classification
             * @type string
             */
            Classification: {
                get: function () {
                    return this.m_Classification;
                },
                set: function (value) {
                    this.m_Classification = value;
                }
            },
            /**
             * The identifier to the local group of spans which refer to the same common symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function LocalGroupId
             * @type number
             */
            LocalGroupId: {
                get: function () {
                    return this.m_LocalGroupId;
                },
                set: function (value) {
                    this.m_LocalGroupId = value;
                }
            }
        },
        alias: [
            "DefaultClassificationColor", "Codex$IClassificationSpan$DefaultClassificationColor",
            "Classification", "Codex$IClassificationSpan$Classification",
            "LocalGroupId", "Codex$IClassificationSpan$LocalGroupId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ClassificationSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DefaultClassificationColor = value.Codex$IClassificationSpan$DefaultClassificationColor;
                this.m_Classification = value.Codex$IClassificationSpan$Classification;
                this.m_LocalGroupId = value.Codex$IClassificationSpan$LocalGroupId;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.DefaultClassificationColor = -1;
                Codex.ObjectModel.Span.prototype.Initialize.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CommitScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.ICommitScopeEntity],
        fields: {
            m_CommitId: null
        },
        props: {
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitScopeEntity
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            }
        },
        alias: ["CommitId", "Codex$ICommitScopeEntity$CommitId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Represents a changed file in a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitChangedFile
     * @augments Codex.ObjectModel.CommitFileLink
     * @implements  Codex.ICommitChangedFile
     */
    Bridge.define("Codex.ObjectModel.CommitChangedFile", {
        inherits: [Codex.ObjectModel.CommitFileLink,Codex.ICommitChangedFile],
        fields: {
            m_ChangeKind: 0,
            m_OriginalFilePath: null
        },
        props: {
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            },
            /**
             * For a renamed file, the path to the file prior to the rename
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function OriginalFilePath
             * @type string
             */
            OriginalFilePath: {
                get: function () {
                    return this.m_OriginalFilePath;
                },
                set: function (value) {
                    this.m_OriginalFilePath = value;
                }
            }
        },
        alias: [
            "ChangeKind", "Codex$ICommitChangedFile$ChangeKind",
            "OriginalFilePath", "Codex$ICommitChangedFile$OriginalFilePath"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitChangedFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ChangeKind = value.Codex$ICommitChangedFile$ChangeKind;
                this.m_OriginalFilePath = value.Codex$ICommitChangedFile$OriginalFilePath;
                Codex.ObjectModel.CommitFileLink.prototype.CopyFrom.call(this, Codex.ObjectModel.CommitFileLink, Bridge.cast((value), Codex.ICommitFileLink));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepoFileScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IRepoFileScopeEntity],
        fields: {
            m_RepoRelativePath: null
        },
        props: {
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            }
        },
        alias: ["RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepoFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesSearchModel
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.ICommitFilesSearchModel
     */
    Bridge.define("Codex.ObjectModel.CommitFilesSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitFilesSearchModel],
        fields: {
            m_CommitFiles: null,
            m_CommitId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$ICommitFilesSearchModel$CommitFiles: {
                get: function () {
                    return this.CommitFiles;
                }
            },
            CommitFiles: {
                get: function () {
                    return this.m_CommitFiles;
                },
                set: function (value) {
                    this.m_CommitFiles = value;
                }
            },
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "CommitId", "Codex$ICommitScopeEntity$CommitId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            init: function () {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.CommitFilesSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesSearchModel$CommitFiles).select($asm.$.Codex.ObjectModel.CommitFilesSearchModel.f1));
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_CommitId = Bridge.cast((value), Codex.ICommitScopeEntity).Codex$ICommitScopeEntity$CommitId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, v);
        }
    });

    Bridge.define("Codex.ObjectModel.CommitSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitSearchModel],
        fields: {
            m_Commit: null
        },
        props: {
            Codex$ICommitSearchModel$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Commit = new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, value.Codex$ICommitSearchModel$Commit);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IDefinitionSearchModel],
        fields: {
            m_Definition: null
        },
        props: {
            Codex$IDefinitionSearchModel$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, value.Codex$IDefinitionSearchModel$Definition);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IDefinitionSpan],
        fields: {
            m_Definition: null,
            m_Parameters: null
        },
        props: {
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Definition
             * @type Codex.IDefinitionSymbol
             */
            Codex$IDefinitionSpan$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Definition
             * @type Codex.ObjectModel.DefinitionSymbol
             */
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDefinitionSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterDefinitionSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, value.Codex$IDefinitionSpan$Definition);
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDefinitionSpan$Parameters).select($asm.$.Codex.ObjectModel.DefinitionSpan.f1));
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.ParameterDefinitionSpan.ctor().CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, v);
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSymbol", {
        inherits: [Codex.ObjectModel.Symbol,Codex.IReferenceSymbol],
        fields: {
            m_ReferenceKind: null,
            m_IsImplicitlyDeclared: false,
            m_ExcludeFromDefaultSearch: false,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The kind of reference. This is used to group references.
             (i.e. for C#(aka .NET) MethodOverride, InterfaceMemberImplementation, InterfaceImplementation, etc.)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ReferenceKind
             * @type string
             */
            ReferenceKind: {
                get: function () {
                    return this.m_ReferenceKind;
                },
                set: function (value) {
                    this.m_ReferenceKind = value;
                }
            },
            /**
             * Indicates the corresponding definition is implicitly declared and therefore this should not be
             used for find all references search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function IsImplicitlyDeclared
             * @type boolean
             */
            IsImplicitlyDeclared: {
                get: function () {
                    return this.m_IsImplicitlyDeclared;
                },
                set: function (value) {
                    this.m_IsImplicitlyDeclared = value;
                }
            },
            /**
             * Indicates if the symbol should be excluded from the definition/find all references search (by default).
             Symbol will only be included if kind is explicitly specified
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromDefaultSearch
             * @type boolean
             */
            ExcludeFromDefaultSearch: {
                get: function () {
                    return this.m_ExcludeFromDefaultSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromDefaultSearch = value;
                }
            },
            /**
             * Indicates if the symbol should NEVER be included in the definition/find all references search.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceKind", "Codex$IReferenceSymbol$ReferenceKind",
            "IsImplicitlyDeclared", "Codex$IReferenceSymbol$IsImplicitlyDeclared",
            "ExcludeFromDefaultSearch", "Codex$IReferenceSymbol$ExcludeFromDefaultSearch",
            "ExcludeFromSearch", "Codex$IReferenceSymbol$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ReferenceKind = value.Codex$IReferenceSymbol$ReferenceKind;
                this.m_IsImplicitlyDeclared = value.Codex$IReferenceSymbol$IsImplicitlyDeclared;
                this.m_ExcludeFromDefaultSearch = value.Codex$IReferenceSymbol$ExcludeFromDefaultSearch;
                this.m_ExcludeFromSearch = value.Codex$IReferenceSymbol$ExcludeFromSearch;
                Codex.ObjectModel.Symbol.prototype.CopyFrom.call(this, Codex.ObjectModel.Symbol, Bridge.cast((value), Codex.ICodeSymbol));
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                return (this.ReferenceKind || "") + " " + (Codex.ObjectModel.Symbol.prototype.toString.call(this) || "");
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ILanguageSearchModel],
        fields: {
            m_Language: null
        },
        props: {
            Codex$ILanguageSearchModel$Language: {
                get: function () {
                    return this.Language;
                }
            },
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LanguageSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Language = new Codex.ObjectModel.LanguageInfo.ctor().CopyFrom(Codex.ObjectModel.LanguageInfo, value.Codex$ILanguageSearchModel$Language);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LineSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.ILineSpan],
        fields: {
            m_LineIndex: null,
            m_LineNumber: null,
            m_LineSpanStart: 0,
            m_LineOffset: 0
        },
        props: {
            /**
             * The 0-based index of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineIndex
             * @type number
             */
            LineIndex: {
                get: function () {
                    return this.CoerceLineIndex(this.m_LineIndex);
                },
                set: function (value) {
                    this.m_LineIndex = value;
                }
            },
            /**
             * The 1-based line number of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineNumber
             * @type number
             */
            LineNumber: {
                get: function () {
                    return this.CoerceLineNumber(this.m_LineNumber);
                },
                set: function (value) {
                    this.m_LineNumber = value;
                }
            },
            /**
             * The character position where the span starts in the line text
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineSpanStart
             * @type number
             */
            LineSpanStart: {
                get: function () {
                    return this.m_LineSpanStart;
                },
                set: function (value) {
                    this.m_LineSpanStart = value;
                }
            },
            /**
             * If positive, the offset of the line span from the beginning of the line
             If negative, the offset of the linespan from the end of the next line
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineOffset
             * @type number
             */
            LineOffset: {
                get: function () {
                    return this.m_LineOffset;
                },
                set: function (value) {
                    this.m_LineOffset = value;
                }
            }
        },
        alias: [
            "LineIndex", "Codex$ILineSpan$LineIndex",
            "LineNumber", "Codex$ILineSpan$LineNumber",
            "LineSpanStart", "Codex$ILineSpan$LineSpanStart",
            "LineOffset", "Codex$ILineSpan$LineOffset"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LineSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_LineIndex = value.Codex$ILineSpan$LineIndex;
                this.m_LineNumber = value.Codex$ILineSpan$LineNumber;
                this.m_LineSpanStart = value.Codex$ILineSpan$LineSpanStart;
                this.m_LineOffset = value.Codex$ILineSpan$LineOffset;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            CoerceLineIndex: function (value) {
                if (value == null || (System.Nullable.lte(value, 0) && this.m_LineNumber != null)) {
                    if (this.m_LineNumber != null) {
                        // Line number is 1-based whereas this value is 0-based
                        return ((System.Nullable.getValue(this.m_LineNumber) - 1) | 0);
                    } else {
                        return 0;
                    }
                }

                return System.Nullable.getValue(value);
            },
            CoerceLineNumber: function (value) {
                if (value == null || (System.Nullable.eq(value, 1) && this.m_LineIndex != null)) {
                    if (this.m_LineIndex != null) {
                        // Line index is 0-based whereas this value is 1-based
                        return ((System.Nullable.getValue(this.m_LineIndex) + 1) | 0);
                    } else {
                        return 1;
                    }
                }

                return System.Nullable.getValue(value);
            },
            OnDeserializedCore: function () {
                Codex.ObjectModel.Span.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                Codex.ObjectModel.Span.prototype.OnSerializingCore.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectReferenceSearchModel],
        fields: {
            m_ProjectReference: null,
            m_ProjectId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$IProjectReferenceSearchModel$ProjectReference: {
                get: function () {
                    return this.ProjectReference;
                }
            },
            ProjectReference: {
                get: function () {
                    return this.m_ProjectReference;
                },
                set: function (value) {
                    this.m_ProjectReference = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectReference = new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, value.Codex$IProjectReferenceSearchModel$ProjectReference);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectSearchModel],
        fields: {
            m_Project: null
        },
        props: {
            Codex$IProjectSearchModel$Project: {
                get: function () {
                    return this.Project;
                }
            },
            Project: {
                get: function () {
                    return this.m_Project;
                },
                set: function (value) {
                    this.m_Project = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Project = new Codex.ObjectModel.AnalyzedProject.ctor().CopyFrom$2(Codex.ObjectModel.AnalyzedProject, value.Codex$IProjectSearchModel$Project);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.PropertySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IPropertySearchModel],
        fields: {
            m_Key: null,
            m_Value: null,
            m_OwnerId: null
        },
        props: {
            /**
             * The key of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Key
             * @type string
             */
            Key: {
                get: function () {
                    return this.m_Key;
                },
                set: function (value) {
                    this.m_Key = value;
                }
            },
            /**
             * The value of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Value
             * @type string
             */
            Value: {
                get: function () {
                    return this.m_Value;
                },
                set: function (value) {
                    this.m_Value = value;
                }
            },
            /**
             * The identifier of the object owning this property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function OwnerId
             * @type string
             */
            OwnerId: {
                get: function () {
                    return this.m_OwnerId;
                },
                set: function (value) {
                    this.m_OwnerId = value;
                }
            }
        },
        alias: [
            "Key", "Codex$IPropertySearchModel$Key",
            "Value", "Codex$IPropertySearchModel$Value",
            "OwnerId", "Codex$IPropertySearchModel$OwnerId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.PropertySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Key = value.Codex$IPropertySearchModel$Key;
                this.m_Value = value.Codex$IPropertySearchModel$Value;
                this.m_OwnerId = value.Codex$IPropertySearchModel$OwnerId;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @public
     * @class Codex.ObjectModel.RegisteredEntity
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IRegisteredEntity
     */
    Bridge.define("Codex.ObjectModel.RegisteredEntity", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRegisteredEntity],
        fields: {
            m_DateAdded: null
        },
        props: {
            /**
             * The date in which the entity was registered (i.e. added to the store)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RegisteredEntity
             * @function DateAdded
             * @type System.DateTime
             */
            DateAdded: {
                get: function () {
                    return this.m_DateAdded;
                },
                set: function (value) {
                    this.m_DateAdded = value;
                }
            }
        },
        alias: ["DateAdded", "Codex$IRegisteredEntity$DateAdded"],
        ctors: {
            init: function () {
                this.m_DateAdded = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RegisteredEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateAdded = value.Codex$IRegisteredEntity$DateAdded;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepositorySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRepositorySearchModel],
        fields: {
            m_Repository: null
        },
        props: {
            Codex$IRepositorySearchModel$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepositorySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Repository = new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, value.Codex$IRepositorySearchModel$Repository);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.ISearchResult", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.SourceSearchModelBase", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ISourceSearchModelBase],
        fields: {
            m_SourceControlInfo: null
        },
        props: {
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.SourceSearchModelBase, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, value.Codex$ISourceSearchModelBase$SourceControlInfo);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @public
     * @class Codex.ObjectModel.StoredFilter
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IStoredFilter
     */
    Bridge.define("Codex.ObjectModel.StoredFilter", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IStoredFilter],
        fields: {
            m_DateUpdated: null,
            m_IndexName: null,
            m_Shard: 0,
            m_StableIds: null,
            m_BaseUids: null,
            m_UnionFilters: null,
            m_Filter: null,
            m_FilterHash: null,
            m_FilterCount: 0
        },
        props: {
            /**
             * The time of the last update to the stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function DateUpdated
             * @type System.DateTime
             */
            DateUpdated: {
                get: function () {
                    return this.m_DateUpdated;
                },
                set: function (value) {
                    this.m_DateUpdated = value;
                }
            },
            /**
             * The name of the index to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function IndexName
             * @type string
             */
            IndexName: {
                get: function () {
                    return this.m_IndexName;
                },
                set: function (value) {
                    this.m_IndexName = value;
                }
            },
            /**
             * The shard to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Shard
             * @type number
             */
            Shard: {
                get: function () {
                    return this.m_Shard;
                },
                set: function (value) {
                    this.m_Shard = value;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$StableIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$StableIds: {
                get: function () {
                    return this.StableIds;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function StableIds
             * @type System.Collections.Generic.List$1
             */
            StableIds: {
                get: function () {
                    return this.m_StableIds;
                },
                set: function (value) {
                    this.m_StableIds = value;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$BaseUids
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$BaseUids: {
                get: function () {
                    return this.BaseUids;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function BaseUids
             * @type System.Collections.Generic.List$1
             */
            BaseUids: {
                get: function () {
                    return this.m_BaseUids;
                },
                set: function (value) {
                    this.m_BaseUids = value;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$UnionFilters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$UnionFilters: {
                get: function () {
                    return this.UnionFilters;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function UnionFilters
             * @type System.Collections.Generic.List$1
             */
            UnionFilters: {
                get: function () {
                    return this.m_UnionFilters;
                },
                set: function (value) {
                    this.m_UnionFilters = value;
                }
            },
            /**
             * The stored filter bit set which matches the stored filter documents
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Filter
             * @type Array.<number>
             */
            Filter: {
                get: function () {
                    return this.m_Filter;
                },
                set: function (value) {
                    this.m_Filter = value;
                }
            },
            /**
             * The hash of {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterHash
             * @type string
             */
            FilterHash: {
                get: function () {
                    return this.m_FilterHash;
                },
                set: function (value) {
                    this.m_FilterHash = value;
                }
            },
            /**
             * The count of elements matched by {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterCount
             * @type number
             */
            FilterCount: {
                get: function () {
                    return this.m_FilterCount;
                },
                set: function (value) {
                    this.m_FilterCount = value;
                }
            }
        },
        alias: [
            "DateUpdated", "Codex$IStoredFilter$DateUpdated",
            "IndexName", "Codex$IStoredFilter$IndexName",
            "Shard", "Codex$IStoredFilter$Shard",
            "Filter", "Codex$IStoredFilter$Filter",
            "FilterHash", "Codex$IStoredFilter$FilterHash",
            "FilterCount", "Codex$IStoredFilter$FilterCount"
        ],
        ctors: {
            init: function () {
                this.m_DateUpdated = System.DateTime.getDefaultValue();
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).ctor();
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.StoredFilter, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateUpdated = value.Codex$IStoredFilter$DateUpdated;
                this.m_IndexName = value.Codex$IStoredFilter$IndexName;
                this.m_Shard = value.Codex$IStoredFilter$Shard;
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).$ctor1(value.Codex$IStoredFilter$StableIds);
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$IStoredFilter$BaseUids);
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).$ctor1(value.Codex$IStoredFilter$UnionFilters);
                this.m_Filter = value.Codex$IStoredFilter$Filter;
                this.m_FilterHash = value.Codex$IStoredFilter$FilterHash;
                this.m_FilterCount = value.Codex$IStoredFilter$FilterCount;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.TextSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ITextSourceSearchModel],
        fields: {
            m_File: null,
            m_SourceControlInfo: null
        },
        props: {
            Codex$ITextSourceSearchModel$File: {
                get: function () {
                    return this.File;
                }
            },
            File: {
                get: function () {
                    return this.m_File;
                },
                set: function (value) {
                    this.m_File = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextSourceSearchModel, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TextSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, value.Codex$ISourceSearchModelBase$SourceControlInfo);
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_File = new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, value.Codex$ITextSourceSearchModel$File);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, Bridge.cast((value), Codex.ISourceSearchModelBase).Codex$ISourceSearchModelBase$SourceControlInfo);
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Documentation for typed parameter
     *
     * @public
     * @class Codex.ObjectModel.TypedParameterDocumentation
     * @augments Codex.ObjectModel.ParameterDocumentation
     * @implements  Codex.ITypedParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.TypedParameterDocumentation", {
        inherits: [Codex.ObjectModel.ParameterDocumentation,Codex.ITypedParameterDocumentation],
        fields: {
            m_Type: null
        },
        props: {
            /**
             * The type of the parameter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Codex$ITypedParameterDocumentation$Type
             * @type Codex.IDocumentationReferenceSymbol
             */
            Codex$ITypedParameterDocumentation$Type: {
                get: function () {
                    return this.Type;
                }
            },
            /**
             * The type of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Type
             * @type Codex.ObjectModel.DocumentationReferenceSymbol
             */
            Type: {
                get: function () {
                    return this.m_Type;
                },
                set: function (value) {
                    this.m_Type = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Type = new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, value.Codex$ITypedParameterDocumentation$Type);
                Codex.ObjectModel.ParameterDocumentation.prototype.CopyFrom.call(this, Codex.ObjectModel.ParameterDocumentation, Bridge.cast((value), Codex.IParameterDocumentation));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.FindAllReferencesArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionLocationArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @abstract
     * @public
     * @class Codex.IBoundSourceFile
     * @implements  Codex.IBoundSourceInfo
     */
    Bridge.define("Codex.IBoundSourceFile", {
        inherits: [Codex.IBoundSourceInfo],
        $kind: "interface"
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterReferenceSpan
     * @implements  Codex.ISymbolSpan
     */
    Bridge.define("Codex.IParameterReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.AnalyzedProject", {
        inherits: [Codex.ObjectModel.ProjectScopeEntity,Codex.IProject],
        fields: {
            m_ProjectKind: null,
            m_Files: null,
            m_ProjectReferences: null
        },
        props: {
            /**
             * The project kind (see {@link })
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectKind
             * @type string
             */
            ProjectKind: {
                get: function () {
                    return this.m_ProjectKind;
                },
                set: function (value) {
                    this.m_ProjectKind = value;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$ProjectReferences
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$ProjectReferences: {
                get: function () {
                    return this.ProjectReferences;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectReferences
             * @type System.Collections.Generic.List$1
             */
            ProjectReferences: {
                get: function () {
                    return this.m_ProjectReferences;
                },
                set: function (value) {
                    this.m_ProjectReferences = value;
                }
            }
        },
        alias: ["ProjectKind", "Codex$IProject$ProjectKind"],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).ctor();
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.AnalyzedProject, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectKind = value.Codex$IProject$ProjectKind;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$Files).select($asm.$.Codex.ObjectModel.AnalyzedProject.f1));
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$ProjectReferences).select($asm.$.Codex.ObjectModel.AnalyzedProject.f2));
                Codex.ObjectModel.ProjectScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ProjectScopeEntity, Bridge.cast((value), Codex.IProjectScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.AnalyzedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.AnalyzedProject, {
        f1: function (v) {
            return new Codex.ObjectModel.ProjectFileLink.ctor().CopyFrom$4(Codex.ObjectModel.ProjectFileLink, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, v);
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceInfo", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IBoundSourceInfo],
        fields: {
            m_ReferenceCount: null,
            m_DefinitionCount: null,
            m_Language: null,
            m_References: null,
            m_Definitions: null,
            m_Classifications: null,
            m_OutliningRegions: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The number of references in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ReferenceCount
             * @type number
             */
            ReferenceCount: {
                get: function () {
                    return this.CoerceReferenceCount(this.m_ReferenceCount);
                },
                set: function (value) {
                    this.m_ReferenceCount = value;
                }
            },
            /**
             * The number of definitions in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function DefinitionCount
             * @type number
             */
            DefinitionCount: {
                get: function () {
                    return this.CoerceDefinitionCount(this.m_DefinitionCount);
                },
                set: function (value) {
                    this.m_DefinitionCount = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$OutliningRegions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$OutliningRegions: {
                get: function () {
                    return this.OutliningRegions;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function OutliningRegions
             * @type System.Collections.Generic.List$1
             */
            OutliningRegions: {
                get: function () {
                    return this.m_OutliningRegions;
                },
                set: function (value) {
                    this.m_OutliningRegions = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceCount", "Codex$IBoundSourceInfo$ReferenceCount",
            "DefinitionCount", "Codex$IBoundSourceInfo$DefinitionCount",
            "Language", "Codex$IBoundSourceInfo$Language",
            "ExcludeFromSearch", "Codex$IBoundSourceInfo$ExcludeFromSearch"
        ],
        ctors: {
            init: function () {
                this.m_References = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ReferenceSpan).Array;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).ctor();
                this.m_Classifications = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ClassificationSpan).Array;
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ReferenceCount = value.Codex$IBoundSourceInfo$ReferenceCount;
                this.m_DefinitionCount = value.Codex$IBoundSourceInfo$DefinitionCount;
                this.m_Language = value.Codex$IBoundSourceInfo$Language;
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$References).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f1));
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Definitions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f2));
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Classifications).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f3));
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$OutliningRegions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f4));
                this.m_ExcludeFromSearch = value.Codex$IBoundSourceInfo$ExcludeFromSearch;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            },
            CoerceReferenceCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : System.Array.getCount(this.References, Codex.ObjectModel.ReferenceSpan));
            },
            CoerceDefinitionCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : this.Definitions.Count);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ReferenceSpan, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.DefinitionSpan.ctor().CopyFrom$1(Codex.ObjectModel.DefinitionSpan, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.ClassificationSpan.ctor().CopyFrom$1(Codex.ObjectModel.ClassificationSpan, v);
        },
        f4: function (v) {
            return new Codex.ObjectModel.OutliningRegion.ctor().CopyFrom(Codex.ObjectModel.OutliningRegion, v);
        }
    });

    /**
     * Describes a commit in version control
     *
     * @public
     * @class Codex.ObjectModel.Commit
     * @augments Codex.ObjectModel.CommitScopeEntity
     * @implements  Codex.ICommit
     */
    Bridge.define("Codex.ObjectModel.Commit", {
        inherits: [Codex.ObjectModel.CommitScopeEntity,Codex.ICommit],
        fields: {
            m_Description: null,
            m_DateUploaded: null,
            m_DateCommitted: null,
            m_ParentCommitIds: null,
            m_ChangedFiles: null
        },
        props: {
            /**
             * The commit description describing the changes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The date the commit was stored to the index
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateUploaded
             * @type System.DateTime
             */
            DateUploaded: {
                get: function () {
                    return this.m_DateUploaded;
                },
                set: function (value) {
                    this.m_DateUploaded = value;
                }
            },
            /**
             * The date of the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateCommitted
             * @type System.DateTime
             */
            DateCommitted: {
                get: function () {
                    return this.m_DateCommitted;
                },
                set: function (value) {
                    this.m_DateCommitted = value;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ParentCommitIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ParentCommitIds: {
                get: function () {
                    return this.ParentCommitIds;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ParentCommitIds
             * @type System.Collections.Generic.List$1
             */
            ParentCommitIds: {
                get: function () {
                    return this.m_ParentCommitIds;
                },
                set: function (value) {
                    this.m_ParentCommitIds = value;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ChangedFiles
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ChangedFiles: {
                get: function () {
                    return this.ChangedFiles;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ChangedFiles
             * @type System.Collections.Generic.List$1
             */
            ChangedFiles: {
                get: function () {
                    return this.m_ChangedFiles;
                },
                set: function (value) {
                    this.m_ChangedFiles = value;
                }
            }
        },
        alias: [
            "Description", "Codex$ICommit$Description",
            "DateUploaded", "Codex$ICommit$DateUploaded",
            "DateCommitted", "Codex$ICommit$DateCommitted"
        ],
        ctors: {
            init: function () {
                this.m_DateUploaded = System.DateTime.getDefaultValue();
                this.m_DateCommitted = System.DateTime.getDefaultValue();
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.Commit, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Description = value.Codex$ICommit$Description;
                this.m_DateUploaded = value.Codex$ICommit$DateUploaded;
                this.m_DateCommitted = value.Codex$ICommit$DateCommitted;
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$ICommit$ParentCommitIds);
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommit$ChangedFiles).select($asm.$.Codex.ObjectModel.Commit.f1));
                Codex.ObjectModel.CommitScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.CommitScopeEntity, Bridge.cast((value), Codex.ICommitScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Commit", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Commit, {
        f1: function (v) {
            return new Codex.ObjectModel.CommitChangedFile.ctor().CopyFrom$1(Codex.ObjectModel.CommitChangedFile, v);
        }
    });

    /**
     * Represents a directory in source control
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesDirectory
     * @augments Codex.ObjectModel.RepoFileScopeEntity
     * @implements  Codex.ICommitFilesDirectory
     */
    Bridge.define("Codex.ObjectModel.CommitFilesDirectory", {
        inherits: [Codex.ObjectModel.RepoFileScopeEntity,Codex.ICommitFilesDirectory],
        fields: {
            m_Files: null
        },
        props: {
            /**
             * The files in the directory
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Codex$ICommitFilesDirectory$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommitFilesDirectory$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * The files in the directory
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesDirectory, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesDirectory$Files).select($asm.$.Codex.ObjectModel.CommitFilesDirectory.f1));
                Codex.ObjectModel.RepoFileScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.RepoFileScopeEntity, Bridge.cast((value), Codex.IRepoFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesDirectory", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesDirectory, {
        f1: function (v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, v);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDefinitionSymbol],
        fields: {
            m_Uid: null,
            m_DisplayName: null,
            m_ShortName: null,
            m_ContainerQualifiedName: null,
            m_Modifiers: null,
            m_Glyph: 0,
            m_SymbolDepth: 0,
            m_DocumentationInfo: null,
            m_TypeName: null,
            m_DeclarationName: null,
            m_Comment: null
        },
        props: {
            /**
             * The unique identifier for the symbol
             NOTE: This is not applicable to most symbols. Only set for symbols
             which are added in a shared context and need this for deduplication)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Uid
             * @type string
             */
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * The display name of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The short name of the symbol (i.e. Task).
             This is used to find the symbol when search term does not contain '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ShortName
             * @type string
             */
            ShortName: {
                get: function () {
                    return this.CoerceShortName(this.m_ShortName);
                },
                set: function (value) {
                    this.m_ShortName = value;
                }
            },
            /**
             * The qualified name of the symbol (i.e. System.Threading.Tasks.Task).
             This is used to find the symbol when the search term contains '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ContainerQualifiedName
             * @type string
             */
            ContainerQualifiedName: {
                get: function () {
                    return this.m_ContainerQualifiedName;
                },
                set: function (value) {
                    this.m_ContainerQualifiedName = value;
                }
            },
            /**
             * Modifiers for the symbol such as public
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Modifiers
             * @type Array.<string>
             */
            Modifiers: {
                get: function () {
                    return this.m_Modifiers;
                },
                set: function (value) {
                    this.m_Modifiers = value;
                }
            },
            /**
             * The glyph
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Glyph
             * @type Codex.ObjectModel.Glyph
             */
            Glyph: {
                get: function () {
                    return this.m_Glyph;
                },
                set: function (value) {
                    this.m_Glyph = value;
                }
            },
            /**
             * The depth of the symbol in its symbolic tree
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function SymbolDepth
             * @type number
             */
            SymbolDepth: {
                get: function () {
                    return this.m_SymbolDepth;
                },
                set: function (value) {
                    this.m_SymbolDepth = value;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Codex$IDefinitionSymbol$DocumentationInfo
             * @type Codex.IDocumentationInfo
             */
            Codex$IDefinitionSymbol$DocumentationInfo: {
                get: function () {
                    return this.DocumentationInfo;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DocumentationInfo
             * @type Codex.ObjectModel.DocumentationInfo
             */
            DocumentationInfo: {
                get: function () {
                    return this.m_DocumentationInfo;
                },
                set: function (value) {
                    this.m_DocumentationInfo = value;
                }
            },
            /**
             * The name of the type for the symbol
             (i.e. return type of method)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function TypeName
             * @type string
             */
            TypeName: {
                get: function () {
                    return this.m_TypeName;
                },
                set: function (value) {
                    this.m_TypeName = value;
                }
            },
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$IDefinitionSymbol$Uid",
            "DisplayName", "Codex$IDefinitionSymbol$DisplayName",
            "ShortName", "Codex$IDefinitionSymbol$ShortName",
            "ContainerQualifiedName", "Codex$IDefinitionSymbol$ContainerQualifiedName",
            "Modifiers", "Codex$IDefinitionSymbol$Modifiers",
            "Glyph", "Codex$IDefinitionSymbol$Glyph",
            "SymbolDepth", "Codex$IDefinitionSymbol$SymbolDepth",
            "TypeName", "Codex$IDefinitionSymbol$TypeName",
            "DeclarationName", "Codex$IDefinitionSymbol$DeclarationName",
            "Comment", "Codex$IDefinitionSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Uid = value.Codex$IDefinitionSymbol$Uid;
                this.m_DisplayName = value.Codex$IDefinitionSymbol$DisplayName;
                this.m_ShortName = value.Codex$IDefinitionSymbol$ShortName;
                this.m_ContainerQualifiedName = value.Codex$IDefinitionSymbol$ContainerQualifiedName;
                this.m_Modifiers = value.Codex$IDefinitionSymbol$Modifiers;
                this.m_Glyph = value.Codex$IDefinitionSymbol$Glyph;
                this.m_SymbolDepth = value.Codex$IDefinitionSymbol$SymbolDepth;
                this.m_DocumentationInfo = new Codex.ObjectModel.DocumentationInfo.ctor().CopyFrom(Codex.ObjectModel.DocumentationInfo, value.Codex$IDefinitionSymbol$DocumentationInfo);
                this.m_TypeName = value.Codex$IDefinitionSymbol$TypeName;
                this.m_DeclarationName = value.Codex$IDefinitionSymbol$DeclarationName;
                this.m_Comment = value.Codex$IDefinitionSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.ReferenceKind = "Definition";
                Codex.ObjectModel.ReferenceSymbol.prototype.Initialize.call(this);
            },
            CoerceShortName: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : "");
            },
            toString: function () {
                return this.DisplayName;
            }
        }
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationReferenceSymbol
     * @augments Codex.ObjectModel.ReferenceSymbol
     * @implements  Codex.IDocumentationReferenceSymbol
     */
    Bridge.define("Codex.ObjectModel.DocumentationReferenceSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDocumentationReferenceSymbol],
        fields: {
            m_DisplayName: null,
            m_Comment: null
        },
        props: {
            /**
             * The display name of the symbol reference as it should appear in documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The comment associated with the reference
             (i.e. return type description https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/xmldoc/returns)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "DisplayName", "Codex$IDocumentationReferenceSymbol$DisplayName",
            "Comment", "Codex$IDocumentationReferenceSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_DisplayName = value.Codex$IDocumentationReferenceSymbol$DisplayName;
                this.m_Comment = value.Codex$IDocumentationReferenceSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterDefinitionSpan
     * @augments Codex.ObjectModel.LineSpan
     * @implements  Codex.IParameterDefinitionSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterDefinitionSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.IParameterDefinitionSpan],
        fields: {
            m_ParameterIndex: 0,
            m_Name: null
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            },
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "ParameterIndex", "Codex$IParameterDefinitionSpan$ParameterIndex",
            "Name", "Codex$IParameterDefinitionSpan$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterDefinitionSpan$ParameterIndex;
                this.m_Name = value.Codex$IParameterDefinitionSpan$Name;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.TextLineSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.ITextLineSpan],
        fields: {
            m_LineSpanText: null
        },
        props: {
            /**
             * The line text
             TODO: It would be nice to not store this here and instead apply it as a join
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextLineSpan
             * @function LineSpanText
             * @type string
             */
            LineSpanText: {
                get: function () {
                    return this.m_LineSpanText;
                },
                set: function (value) {
                    this.m_LineSpanText = value;
                }
            }
        },
        alias: ["LineSpanText", "Codex$ITextLineSpan$LineSpanText"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextLineSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_LineSpanText = value.Codex$ITextLineSpan$LineSpanText;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @public
     * @class Codex.ObjectModel.ProjectFileLink
     * @augments Codex.ObjectModel.ProjectFileScopeEntity
     * @implements  Codex.IProjectFileLink
     */
    Bridge.define("Codex.ObjectModel.ProjectFileLink", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IProjectFileLink],
        fields: {
            m_FileId: null
        },
        props: {
            /**
             * Unique identifier for file
             TODO: Make this checksum and searchable and use for discovering commit from PDB.
             TODO: What is this?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            }
        },
        alias: ["FileId", "Codex$IProjectFileLink$FileId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ProjectFileLink, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_FileId = value.Codex$IProjectFileLink$FileId;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IReferenceSearchModel],
        fields: {
            m_Reference: null,
            m_Spans: null,
            m_CompressedSpans: null,
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The reference symbol
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Codex$IReferenceSearchModel$Reference
             * @type Codex.ICodeSymbol
             */
            Codex$IReferenceSearchModel$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Reference
             * @type Codex.ObjectModel.Symbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            Codex$IReferenceSearchModel$Spans: {
                get: function () {
                    return this.Spans;
                }
            },
            Spans: {
                get: function () {
                    return this.CoerceSpans(this.m_Spans);
                },
                set: function (value) {
                    this.m_Spans = value;
                }
            },
            /**
             * Compressed list of spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function CompressedSpans
             * @type Codex.ISymbolLineSpanList
             */
            CompressedSpans: {
                get: function () {
                    return this.m_CompressedSpans;
                },
                set: function (value) {
                    this.m_CompressedSpans = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "CompressedSpans", "Codex$IReferenceSearchModel$CompressedSpans",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            init: function () {
                this.m_Spans = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.SymbolSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$3: function (TTarget, value) {
                this.m_Reference = new Codex.ObjectModel.Symbol.ctor().CopyFrom(Codex.ObjectModel.Symbol, value.Codex$IReferenceSearchModel$Reference);
                this.m_Spans = new (System.Collections.Generic.List$1(Codex.ObjectModel.SymbolSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSearchModel$Spans).select($asm.$.Codex.ObjectModel.ReferenceSearchModel.f1));
                this.m_CompressedSpans = value.Codex$IReferenceSearchModel$CompressedSpans;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CoerceSpans: function (value) {
                var $t;
                value = value || (($t = this.CompressedSpans) != null ? $t.Codex$ISymbolLineSpanList$ToList() : null);
                this.Spans = value;
                return value;
            },
            OnSerializingCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.RemoveDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            },
            OnDeserializedCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.AssignDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.SymbolSpan.ctor().CopyFrom$3(Codex.ObjectModel.SymbolSpan, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SearchResult", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.Sdk.Search.ISearchResult],
        fields: {
            m_TextSpan: null
        },
        props: {
            /**
             * The text span for a text result
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SearchResult
             * @function Codex$Sdk$Search$ISearchResult$TextSpan
             * @type Codex.ITextLineSpan
             */
            Codex$Sdk$Search$ISearchResult$TextSpan: {
                get: function () {
                    return this.TextSpan;
                }
            },
            /**
             * The text span for a text result
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchResult
             * @function TextSpan
             * @type Codex.ObjectModel.TextLineSpan
             */
            TextSpan: {
                get: function () {
                    return this.m_TextSpan;
                },
                set: function (value) {
                    this.m_TextSpan = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.SearchResult, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_TextSpan = new Codex.ObjectModel.TextLineSpan.ctor().CopyFrom$2(Codex.ObjectModel.TextLineSpan, value.Codex$Sdk$Search$ISearchResult$TextSpan);
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.SourceFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceFileInfo],
        fields: {
            m_Lines: 0,
            m_Size: 0,
            m_Language: null,
            m_WebAddress: null,
            m_Encoding: null,
            m_Properties: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_SourceControlContentId: null,
            m_ProjectRelativePath: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The number of lines in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Lines
             * @type number
             */
            Lines: {
                get: function () {
                    return this.m_Lines;
                },
                set: function (value) {
                    this.m_Lines = value;
                }
            },
            /**
             * The size of the file in bytes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Size
             * @type number
             */
            Size: {
                get: function () {
                    return this.m_Size;
                },
                set: function (value) {
                    this.m_Size = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * The web address of the file. TODO: Remove? Is repo relative path enough?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function WebAddress
             * @type string
             */
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Encoding
             * @type Codex.IEncodingDescription
             */
            Codex$ISourceFileInfo$Encoding: {
                get: function () {
                    return this.Encoding;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Encoding
             * @type Codex.ObjectModel.EncodingDescription
             */
            Encoding: {
                get: function () {
                    return this.m_Encoding;
                },
                set: function (value) {
                    this.m_Encoding = value;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Properties
             * @type Codex.IPropertyMap
             */
            Codex$ISourceFileInfo$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "Lines", "Codex$ISourceFileInfo$Lines",
            "Size", "Codex$ISourceFileInfo$Size",
            "Language", "Codex$ISourceFileInfo$Language",
            "WebAddress", "Codex$ISourceFileInfo$WebAddress",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$5(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$4(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.SourceFileInfo, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$5: function (TTarget, value) {
                this.m_Lines = value.Codex$ISourceFileInfo$Lines;
                this.m_Size = value.Codex$ISourceFileInfo$Size;
                this.m_Language = value.Codex$ISourceFileInfo$Language;
                this.m_WebAddress = value.Codex$ISourceFileInfo$WebAddress;
                this.m_Encoding = new Codex.ObjectModel.EncodingDescription.ctor().CopyFrom(Codex.ObjectModel.EncodingDescription, value.Codex$ISourceFileInfo$Encoding);
                this.m_Properties = new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, value.Codex$ISourceFileInfo$Properties);
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_SourceControlContentId = Bridge.cast((value), Codex.ISourceControlFileInfo).Codex$ISourceControlFileInfo$SourceControlContentId;
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @public
     * @class Codex.ObjectModel.BoundSourceFile
     * @augments Codex.ObjectModel.BoundSourceInfo
     * @implements  Codex.IBoundSourceFile
     */
    Bridge.define("Codex.ObjectModel.BoundSourceFile", {
        inherits: [Codex.ObjectModel.BoundSourceInfo,Codex.IBoundSourceFile],
        fields: {
            m_SourceFile: null
        },
        props: {
            /**
             * The source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function Codex$IBoundSourceFile$SourceFile
             * @type Codex.ISourceFile
             */
            Codex$IBoundSourceFile$SourceFile: {
                get: function () {
                    return this.SourceFile;
                }
            },
            /**
             * The source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function SourceFile
             * @type Codex.ObjectModel.SourceFile
             */
            SourceFile: {
                get: function () {
                    return this.m_SourceFile;
                },
                set: function (value) {
                    this.m_SourceFile = value;
                }
            }
        },
        alias: [
            "References", "Codex$IBoundSourceInfo$References",
            "Definitions", "Codex$IBoundSourceInfo$Definitions",
            "Classifications", "Codex$IBoundSourceInfo$Classifications",
            "OutliningRegions", "Codex$IBoundSourceInfo$OutliningRegions"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.BoundSourceFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_SourceFile = new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, value.Codex$IBoundSourceFile$SourceFile);
                Codex.ObjectModel.BoundSourceInfo.prototype.CopyFrom$4.call(this, Codex.ObjectModel.BoundSourceInfo, Bridge.cast((value), Codex.IBoundSourceInfo));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.SymbolSpan", {
        inherits: [Codex.ObjectModel.TextLineSpan,Codex.ISymbolSpan],
        props: {
            LineSpanEnd: {
                get: function () {
                    return ((this.LineSpanStart + this.Length) | 0);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.SymbolSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor3.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                Codex.ObjectModel.TextLineSpan.prototype.CopyFrom$2.call(this, Codex.ObjectModel.TextLineSpan, Bridge.cast((value), Codex.ITextLineSpan));
                return Bridge.cast((this), TTarget);
            },
            Trim: function () {
                var initialLength = this.LineSpanText.length;
                this.LineSpanText = System.String.trimStart(this.LineSpanText);
                var newLength = this.LineSpanText.length;
                this.LineSpanStart = (this.LineSpanStart - (((initialLength - newLength) | 0))) | 0;
                this.LineSpanText = System.String.trimEnd(this.LineSpanText);
                this.LineSpanStart = Math.max(this.LineSpanStart, 0);
                this.Length = Math.min(this.LineSpanText.length, this.Length);
            },
            CreateReference: function (referenceSymbol, relatedDefinition) {
                var $t;
                if (relatedDefinition === void 0) { relatedDefinition = new Codex.ObjectModel.SymbolId(); }
                return ($t = new Codex.ObjectModel.ReferenceSpan.$ctor4(this), $t.RelatedDefinition = relatedDefinition, $t.Reference = referenceSymbol, $t);
            },
            CreateDefinition: function (definition) {
                var $t;
                return ($t = new Codex.ObjectModel.DefinitionSpan.$ctor2(this), $t.Definition = definition, $t);
            }
        }
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterReferenceSpan
     * @augments Codex.ObjectModel.SymbolSpan
     * @implements  Codex.IParameterReferenceSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IParameterReferenceSpan],
        fields: {
            m_ParameterIndex: 0
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterReferenceSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            }
        },
        alias: ["ParameterIndex", "Codex$IParameterReferenceSpan$ParameterIndex"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterReferenceSpan$ParameterIndex;
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IReferenceSpan],
        fields: {
            m_RelatedDefinition: null,
            m_Reference: null,
            m_Parameters: null
        },
        props: {
            /**
             * Gets the symbol id of the definition which provides this reference
             (i.e. method definition for interface implementation)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function RelatedDefinition
             * @type Codex.ObjectModel.SymbolId
             */
            RelatedDefinition: {
                get: function () {
                    return this.m_RelatedDefinition;
                },
                set: function (value) {
                    this.m_RelatedDefinition = value;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Reference
             * @type Codex.IReferenceSymbol
             */
            Codex$IReferenceSpan$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Reference
             * @type Codex.ObjectModel.ReferenceSymbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferenceSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        alias: ["RelatedDefinition", "Codex$IReferenceSpan$RelatedDefinition"],
        ctors: {
            init: function () {
                this.m_RelatedDefinition = new Codex.ObjectModel.SymbolId();
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterReferenceSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_RelatedDefinition = value.Codex$IReferenceSpan$RelatedDefinition;
                this.m_Reference = new Codex.ObjectModel.ReferenceSymbol.ctor().CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, value.Codex$IReferenceSpan$Reference);
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSpan$Parameters).select($asm.$.Codex.ObjectModel.ReferenceSpan.f1));
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.ParameterReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, v);
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDb2RleC5WaWV3LldlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiLi4vLi4vQ29kZXguU2RrLlR5cGVzL1N1cHBvcnQvQXR0cmlidXRlcy5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9TdXBwb3J0L0RhdGFJbmNsdXNpb24uY3MiLCIuLi8uLi9vdXQvYmluL0RlYnVnL0NvZGV4LkZyYW1ld29yay5HZW5lcmF0aW9uL0VudGl0eVR5cGVzLmcuY3MiLCIuLi9Db2RleC5TZGsuU2hhcmVkL0dseXBoLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9TeW1ib2xJZC5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9BcGkvSUluZGV4LmNzIiwiLi4vLi4vQ29kZXguU2RrLlR5cGVzL0FwaS9JQ29kZXguY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvU3VwcG9ydC9TZWFyY2hUeXBlRGVzY3JpcHRvcnMuY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvU2VhcmNoVHlwZXMuY3MiLCIuLi9Db2RleC5TZGsuU2hhcmVkL1V0aWxpdGllcy9Db2xsZWN0aW9uVXRpbGl0aWVzLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9VdGlsaXRpZXMvU2VyaWFsaXphdGlvblV0aWxpdGllcy5jcyIsIkFwcC5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL01haW5XaW5kb3cueGFtbC5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL1NlYXJjaFJlc3VsdHMueGFtbC5jcyIsIkNvbXBhdGliaWxpdHkvQ29tcGF0aWJpbGl0eS5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9FbnRpdHlCYXNlLmNzIiwiLi4vQ29kZXguVmlldy5TaGFyZWQvVmlld01vZGVsLmNzIiwiV2ViQXBpQ29kZXguY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJB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S0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEE7NEJBQ0lBLE1BQU1BLElBQUlBOzs7Z0RBSWdDQTtvQkFFbERBLFFBQVFBO3dCQUVKQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dC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Ozs7OztvQ0E1RTREQTs7Ozs7OzhCQUtuRUE7OztnQkFDakJBLGlEQUE2QkE7OzhCQUdaQTs7K0RBQ1JBOzs4QkFHUUE7OytEQUNSQTs7OEJBR1FBOzsrREFDUkE7OzhCQUdRQTs7K0RBQ1JBOzs7O2tDQTBEbUJBLFNBQVNBO2dCQUVyQ0EsMkJBQTJCQSxBQUFDQSxBQUFzQkEsQUFBQ0E7Z0JBQ25EQSxtQkFBbUJBLElBQUlBLHVGQUE0Q0EsQUFBQ0EsQUFBc0JBLEFBQUNBO2dCQUMzRkEsb0JBQW9CQSxLQUFJQSxvRkFBd0RBLDRCQUFzSEEsQUFBQ0EsQUFBc0JBLEFBQUNBLDhDQUFvQkEsQUFBK0dBO2dCQUNqV0EsMkZBQTBCQSxBQUFDQSxZQUFtQkEsQ0FBQ0E7Z0JBQy9DQSxPQUFPQSxBQUFDQSxZQUFTQSxDQUFDQTs7Ozs7Ozs7O21CQUZvVkEsSUFBSUEscUdBQTBEQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBTZWFyY2hEZXNjcmlwdG9ySW5saW5lQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGJvb2wgSW5saW5lO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoRGVzY3JpcHRvcklubGluZUF0dHJpYnV0ZShib29sIGlubGluZSA9IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5saW5lID0gaW5saW5lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEVudGl0eUlkQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuQ2xhc3MsIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBQbGFjZWhvbGRlckF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLkNsYXNzLCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBUeXBlIFR5cGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKFR5cGUgdHlwZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFR5cGUgPSB0eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5JbnRlcmZhY2UsIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBBZGFwdGVyVHlwZUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLkludGVyZmFjZSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEdlbmVyYXRlZENsYXNzTmFtZUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgTmFtZTtcclxuXHJcbiAgICAgICAgcHVibGljIEdlbmVyYXRlZENsYXNzTmFtZUF0dHJpYnV0ZShzdHJpbmcgbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW5kaWNhdGVzIGFuIGF0dGFjaGVkIHByb3BlcnR5IHdoaWNoIGlzIG5vdCBpbnRyaW5zaWMgdG8gdGhlIHBhcmVudCBvYmplY3QgYW5kIHNob3VsZCBiZVxyXG4gICAgLy8vIGV4Y2x1ZGVkIHdoZW4gY29tcHV0aW5nIHRoZSA8c2VlIGNyZWY9XCJJU2VhcmNoRW50aXR5LkVudGl0eUNvbnRlbnRJZFwiLz5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEF0dGFjaGVkQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBRdWVyeUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgUmVhZE9ubHlMaXN0QXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBDb2VyY2VHZXRBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgVHlwZSBDb2VyY2VkU291cmNlVHlwZTtcclxuXHJcbiAgICAgICAgcHVibGljIENvZXJjZUdldEF0dHJpYnV0ZShUeXBlIGNvZXJjZWRTb3VyY2VUeXBlID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvZXJjZWRTb3VyY2VUeXBlID0gY29lcmNlZFNvdXJjZVR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbmRpY2F0ZXMgc3RhZ2VzIGZvciB3aGljaCB0aGUgZ2l2ZW4gcHJvcGVydHkgc2hvdWxkIGJlIGluY2x1ZGVkXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBJbmNsdWRlQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IE9iamVjdFN0YWdlIEFsbG93ZWRTdGFnZXM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBJbmNsdWRlQXR0cmlidXRlKE9iamVjdFN0YWdlIHN0YWdlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFsbG93ZWRTdGFnZXMgPSBzdGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5IHwgQXR0cmlidXRlVGFyZ2V0cy5JbnRlcmZhY2UgfCBBdHRyaWJ1dGVUYXJnZXRzLkNsYXNzLCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgUmVxdWlyZWRGb3JBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgT2JqZWN0U3RhZ2UgU3RhZ2VzO1xyXG5cclxuICAgICAgICBwdWJsaWMgUmVxdWlyZWRGb3JBdHRyaWJ1dGUoT2JqZWN0U3RhZ2Ugc3RhZ2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3RhZ2VzID0gc3RhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBPYmplY3RTdGFnZVxyXG4gICAge1xyXG4gICAgICAgIE5vbmUgPSAwLFxyXG4gICAgICAgIEFuYWx5c2lzID0gMSxcclxuICAgICAgICBJbmRleCA9IDEgPDwgMSxcclxuICAgICAgICBTZWFyY2ggPSAxIDw8IDIsXHJcbiAgICAgICAgQWxsID0gU2VhcmNoIHwgSW5kZXggfCBBbmFseXNpc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIFNlYXJjaEJlaGF2aW9yXHJcbiAgICB7XHJcbiAgICAgICAgTm9uZSxcclxuICAgICAgICBUZXJtLFxyXG4gICAgICAgIE5vcm1hbGl6ZWRLZXl3b3JkLFxyXG4gICAgICAgIFNvcnR3b3JkLFxyXG4gICAgICAgIEhpZXJhcmNoaWNhbFBhdGgsXHJcbiAgICAgICAgRnVsbFRleHQsXHJcbiAgICAgICAgUHJlZml4LFxyXG4gICAgICAgIFByZWZpeEZ1bGxOYW1lXHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBTZWFyY2hCZWhhdmlvckF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBTZWFyY2hCZWhhdmlvciBCZWhhdmlvcjtcclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaEJlaGF2aW9yQXR0cmlidXRlKFNlYXJjaEJlaGF2aW9yIGJlaGF2aW9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQmVoYXZpb3IgPSBiZWhhdmlvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgcHVibGljIGVudW0gRGF0YUluY2x1c2lvbk9wdGlvbnNcbiAgICB7XG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGF0YSBzaG91bGQgYWx3YXlzIGJlIGluY2x1ZGVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgTm9uZSA9IDAsXG4gICAgICAgIERlZmluaXRpb25zID0gMSxcbiAgICAgICAgUmVmZXJlbmNlcyA9IDEgPDwgMSxcbiAgICAgICAgQ2xhc3NpZmljYXRpb25zID0gMSA8PCAyLFxuICAgICAgICBTZWFyY2hEZWZpbml0aW9ucyA9IDEgPDwgMyxcbiAgICAgICAgU2VhcmNoUmVmZXJlbmNlcyA9IDEgPDwgNCxcbiAgICAgICAgQ29udGVudCA9IDEgPDwgNSxcbiAgICAgICAgQWxsID0gRGVmaW5pdGlvbnMgfCBSZWZlcmVuY2VzIHwgQ2xhc3NpZmljYXRpb25zIHwgU2VhcmNoRGVmaW5pdGlvbnMgfCBTZWFyY2hSZWZlcmVuY2VzIHwgQ29udGVudCxcblxuICAgICAgICAvLyBEZWZhdWx0IGRvZXMgbm90IGluY2x1ZGUgZGVmaW5pdGlvbnMgc2luY2UgdGhleSBjYW4gYmUgcXVlcmllZCBsYXppbHkgcmF0aGVyIHRoYW4gZWFnZXJseSByZXRyaWV2ZWQuXG4gICAgICAgIERlZmF1bHQgPSBSZWZlcmVuY2VzIHwgQ2xhc3NpZmljYXRpb25zIHwgU2VhcmNoRGVmaW5pdGlvbnMgfCBTZWFyY2hSZWZlcmVuY2VzIHwgQ29udGVudFxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIERhdGFJbmNsdXNpb25BdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YUluY2x1c2lvbk9wdGlvbnMgRGF0YUluY2x1c2lvbjtcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFJbmNsdXNpb25BdHRyaWJ1dGUoRGF0YUluY2x1c2lvbk9wdGlvbnMgZGF0YUluY2x1c2lvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERhdGFJbmNsdXNpb24gPSBkYXRhSW5jbHVzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGdlbmVyYXRlZCBieSBhIHRvb2wuXHJcbi8vICAgICBSdW50aW1lIFZlcnNpb246NC4wLjMwMzE5LjQyMDAwXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubmFtZXNwYWNlIENvZGV4Lk9iamVjdE1vZGVsIHtcclxuICAgIHVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbiAgICB1c2luZyBDb2RleC5GcmFtZXdvcmsuVHlwZXM7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZXhUeXBlVXRpbGl0aWVzIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlEaWN0aW9uYXJ5PFN5c3RlbS5UeXBlLCBTeXN0ZW0uVHlwZT4gc190eXBlTWFwcGluZ3MgPSBDcmVhdGVUeXBlTWFwcGluZygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkRpY3Rpb25hcnk8U3lzdGVtLlR5cGUsIFN5c3RlbS5UeXBlPiBDcmVhdGVUeXBlTWFwcGluZygpIHtcclxuICAgICAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuRGljdGlvbmFyeTxTeXN0ZW0uVHlwZSwgU3lzdGVtLlR5cGU+IHR5cGVNYXBwaW5nID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkRpY3Rpb25hcnk8U3lzdGVtLlR5cGUsIFN5c3RlbS5UeXBlPigpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb21taXQpLCB0eXBlb2YoQ29tbWl0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0KSwgdHlwZW9mKENvZGV4LklDb21taXQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpLCB0eXBlb2YoQ29tbWl0Q2hhbmdlZEZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRDaGFuZ2VkRmlsZSksIHR5cGVvZihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZUxpbmspLCB0eXBlb2YoQ29tbWl0RmlsZUxpbmspKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRGaWxlTGluayksIHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZUxpbmspKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQnJhbmNoKSwgdHlwZW9mKEJyYW5jaCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEJyYW5jaCksIHR5cGVvZihDb2RleC5JQnJhbmNoKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlRmlsZSksIHR5cGVvZihCb3VuZFNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihCb3VuZFNvdXJjZUZpbGUpLCB0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUluZm8pLCB0eXBlb2YoQm91bmRTb3VyY2VJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQm91bmRTb3VyY2VJbmZvKSwgdHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSwgdHlwZW9mKFNvdXJjZUNvbnRyb2xGaWxlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNvdXJjZUNvbnRyb2xGaWxlSW5mbyksIHR5cGVvZihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSwgdHlwZW9mKFNvdXJjZUZpbGVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU291cmNlRmlsZUluZm8pLCB0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24pLCB0eXBlb2YoRW5jb2RpbmdEZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEVuY29kaW5nRGVzY3JpcHRpb24pLCB0eXBlb2YoQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU291cmNlRmlsZSksIHR5cGVvZihTb3VyY2VGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU291cmNlRmlsZSksIHR5cGVvZihDb2RleC5JU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklPdXRsaW5pbmdSZWdpb24pLCB0eXBlb2YoT3V0bGluaW5nUmVnaW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoT3V0bGluaW5nUmVnaW9uKSwgdHlwZW9mKENvZGV4LklPdXRsaW5pbmdSZWdpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNwYW4pLCB0eXBlb2YoRGVmaW5pdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihEZWZpbml0aW9uU3BhbiksIHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pLCB0eXBlb2YoUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiksIHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3BhbiksIHR5cGVvZihSZWZlcmVuY2VTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVmZXJlbmNlU3BhbiksIHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSwgdHlwZW9mKFBhcmFtZXRlclJlZmVyZW5jZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSwgdHlwZW9mKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbiksIHR5cGVvZihDbGFzc2lmaWNhdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDbGFzc2lmaWNhdGlvblNwYW4pLCB0eXBlb2YoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTeW1ib2xTcGFuKSwgdHlwZW9mKFN5bWJvbFNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTeW1ib2xTcGFuKSwgdHlwZW9mKENvZGV4LklTeW1ib2xTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVRleHRMaW5lU3BhbiksIHR5cGVvZihUZXh0TGluZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihUZXh0TGluZVNwYW4pLCB0eXBlb2YoQ29kZXguSVRleHRMaW5lU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklMaW5lU3BhbiksIHR5cGVvZihMaW5lU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKExpbmVTcGFuKSwgdHlwZW9mKENvZGV4LklMaW5lU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTcGFuKSwgdHlwZW9mKFNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTcGFuKSwgdHlwZW9mKENvZGV4LklTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXcpLCB0eXBlb2YoQ29kZVJldmlldykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXcpLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXcpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbiksIHR5cGVvZihDb2RlUmV2aWV3SXRlcmF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld0l0ZXJhdGlvbiksIHR5cGVvZihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvKSwgdHlwZW9mKENvZGVSZXZpZXdlckluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RlUmV2aWV3ZXJJbmZvKSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSwgdHlwZW9mKENvZGVSZXZpZXdGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld0ZpbGUpLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSwgdHlwZW9mKENvZGVSZXZpZXdDb21tZW50VGhyZWFkKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50KSwgdHlwZW9mKENvZGVSZXZpZXdDb21tZW50KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld0NvbW1lbnQpLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUxhbmd1YWdlSW5mbyksIHR5cGVvZihMYW5ndWFnZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihMYW5ndWFnZUluZm8pLCB0eXBlb2YoQ29kZXguSUxhbmd1YWdlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSwgdHlwZW9mKENsYXNzaWZpY2F0aW9uU3R5bGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDbGFzc2lmaWNhdGlvblN0eWxlKSwgdHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3QpLCB0eXBlb2YoQW5hbHl6ZWRQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQW5hbHl6ZWRQcm9qZWN0KSwgdHlwZW9mKENvZGV4LklQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSwgdHlwZW9mKFJlZmVyZW5jZWRQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVmZXJlbmNlZFByb2plY3QpLCB0eXBlb2YoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlTGluayksIHR5cGVvZihQcm9qZWN0RmlsZUxpbmspKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9qZWN0RmlsZUxpbmspLCB0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlTGluaykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbyksIHR5cGVvZihEb2N1bWVudGF0aW9uSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKERvY3VtZW50YXRpb25JbmZvKSwgdHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSwgdHlwZW9mKFBhcmFtZXRlckRvY3VtZW50YXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSwgdHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiksIHR5cGVvZihUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pLCB0eXBlb2YoQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSwgdHlwZW9mKERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSwgdHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpLCB0eXBlb2YoUHJvcGVydHlTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb3BlcnR5U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvcGVydHlNYXApLCB0eXBlb2YoUHJvcGVydHlNYXApKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9wZXJ0eU1hcCksIHR5cGVvZihDb2RleC5JUHJvcGVydHlNYXApKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeSksIHR5cGVvZihSZXBvc2l0b3J5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb3NpdG9yeSksIHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlKSwgdHlwZW9mKFJlcG9zaXRvcnlSZWZlcmVuY2UpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvc2l0b3J5UmVmZXJlbmNlKSwgdHlwZW9mKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNlYXJjaEVudGl0eSksIHR5cGVvZihTZWFyY2hFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTZWFyY2hFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVNlYXJjaEVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpLCB0eXBlb2YoUmVwb1Njb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb1Njb3BlRW50aXR5KSwgdHlwZW9mKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29tbWl0U2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRTY29wZUVudGl0eSksIHR5cGVvZihDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSwgdHlwZW9mKFByb2plY3RTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb2plY3RTY29wZUVudGl0eSksIHR5cGVvZihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpLCB0eXBlb2YoUmVwb0ZpbGVTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9GaWxlU2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSksIHR5cGVvZihQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvamVjdEZpbGVTY29wZUVudGl0eSksIHR5cGVvZihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZWdpc3RlcmVkRW50aXR5KSwgdHlwZW9mKFJlZ2lzdGVyZWRFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZWdpc3RlcmVkRW50aXR5KSwgdHlwZW9mKENvZGV4LklSZWdpc3RlcmVkRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVN0b3JlZEZpbHRlciksIHR5cGVvZihTdG9yZWRGaWx0ZXIpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTdG9yZWRGaWx0ZXIpLCB0eXBlb2YoQ29kZXguSVN0b3JlZEZpbHRlcikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwpLCB0eXBlb2YoRGVmaW5pdGlvblNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRGVmaW5pdGlvblNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCksIHR5cGVvZihMYW5ndWFnZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoTGFuZ3VhZ2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCksIHR5cGVvZihSZWZlcmVuY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlZmVyZW5jZVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UpLCB0eXBlb2YoU291cmNlU2VhcmNoTW9kZWxCYXNlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU291cmNlU2VhcmNoTW9kZWxCYXNlKSwgdHlwZW9mKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCksIHR5cGVvZihCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQm91bmRTb3VyY2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsKSwgdHlwZW9mKFJlcG9zaXRvcnlTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9zaXRvcnlTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbCksIHR5cGVvZihQcm9qZWN0U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9qZWN0U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29tbWl0U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JQ29tbWl0U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCksIHR5cGVvZihDb21taXRGaWxlc1NlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklGaWxlU3RhdGlzdGljcyksIHR5cGVvZihGaWxlU3RhdGlzdGljcykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEZpbGVTdGF0aXN0aWNzKSwgdHlwZW9mKENvZGV4LklGaWxlU3RhdGlzdGljcykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvKSwgdHlwZW9mKFJlcG9zaXRvcnlTdG9yZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvc2l0b3J5U3RvcmVJbmZvKSwgdHlwZW9mKENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5KSwgdHlwZW9mKENvbW1pdEZpbGVzRGlyZWN0b3J5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0RmlsZXNEaXJlY3RvcnkpLCB0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSksIHR5cGVvZihTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTdG9yZWRCb3VuZFNvdXJjZUZpbGUpLCB0eXBlb2YoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSwgdHlwZW9mKERlZmluaXRpb25TeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihEZWZpbml0aW9uU3ltYm9sKSwgdHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCksIHR5cGVvZihSZWZlcmVuY2VTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZWZlcmVuY2VTeW1ib2wpLCB0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlU3ltYm9sKSwgdHlwZW9mKFN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFN5bWJvbCksIHR5cGVvZihDb2RleC5JQ29kZVN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCksIHR5cGVvZihTZWFyY2hSZXN1bHQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTZWFyY2hSZXN1bHQpLCB0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JSW5kZXgpLCB0eXBlb2YoSW5kZXgpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihJbmRleCksIHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklJbmRleCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZU1hcHBpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVzY3JpYmVzIGEgY29tbWl0IGluIHZlcnNpb24gY29udHJvbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXQgOiBDb21taXRTY29wZUVudGl0eSwgQ29kZXguSUNvbW1pdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0RhdGVVcGxvYWRlZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0RhdGVDb21taXR0ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4gbV9QYXJlbnRDb21taXRJZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdENoYW5nZWRGaWxlPiBtX0NoYW5nZWRGaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdENoYW5nZWRGaWxlPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXQoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXQoQ29kZXguSUNvbW1pdCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0KENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdChDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb21taXQgZGVzY3JpcHRpb24gZGVzY3JpYmluZyB0aGUgY2hhbmdlc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRhdGUgdGhlIGNvbW1pdCB3YXMgc3RvcmVkIHRvIHRoZSBpbmRleFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIERhdGVVcGxvYWRlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RhdGVVcGxvYWRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RhdGVVcGxvYWRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRhdGUgb2YgdGhlIGNvbW1pdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIERhdGVDb21taXR0ZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EYXRlQ29tbWl0dGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGF0ZUNvbW1pdHRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIDxzZWUgY3JlZj1cIlA6Q29kZXguSUNvbW1pdFNjb3BlRW50aXR5LkNvbW1pdElkXCIgLz4gb2YgdGhlIHBhcmVudCBjb21taXRzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PHN0cmluZz4gQ29kZXguSUNvbW1pdC5QYXJlbnRDb21taXRJZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUGFyZW50Q29tbWl0SWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIDxzZWUgY3JlZj1cIlA6Q29kZXguSUNvbW1pdFNjb3BlRW50aXR5LkNvbW1pdElkXCIgLz4gb2YgdGhlIHBhcmVudCBjb21taXRzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4gUGFyZW50Q29tbWl0SWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyZW50Q29tbWl0SWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUGFyZW50Q29tbWl0SWRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlsZXMgY2hhbmdlZCBpbiB0aGUgY29tbWl0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb21taXRDaGFuZ2VkRmlsZT4gQ29kZXguSUNvbW1pdC5DaGFuZ2VkRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ2hhbmdlZEZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGVzIGNoYW5nZWQgaW4gdGhlIGNvbW1pdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRDaGFuZ2VkRmlsZT4gQ2hhbmdlZEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ2hhbmdlZEZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2hhbmdlZEZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0IHtcclxuICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGF0ZVVwbG9hZGVkID0gKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLkRhdGVVcGxvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5tX0RhdGVDb21taXR0ZWQgPSAoKENvZGV4LklDb21taXQpKHZhbHVlKSkuRGF0ZUNvbW1pdHRlZDtcclxuICAgICAgICAgICAgdGhpcy5tX1BhcmVudENvbW1pdElkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4oKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLlBhcmVudENvbW1pdElkcyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9DaGFuZ2VkRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRDaGFuZ2VkRmlsZT4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRDaGFuZ2VkRmlsZT4oKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLkNoYW5nZWRGaWxlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0Q2hhbmdlZEZpbGU+KSh2ID0+IG5ldyBDb21taXRDaGFuZ2VkRmlsZSgpLkNvcHlGcm9tPENvbW1pdENoYW5nZWRGaWxlPih2KSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxDb21taXRTY29wZUVudGl0eT4oKChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIGNoYW5nZWQgZmlsZSBpbiBhIGNvbW1pdFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdENoYW5nZWRGaWxlIDogQ29tbWl0RmlsZUxpbmssIENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5GaWxlQ2hhbmdlS2luZCBtX0NoYW5nZUtpbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9PcmlnaW5hbEZpbGVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRDaGFuZ2VkRmlsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdENoYW5nZWRGaWxlKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdENoYW5nZWRGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRDaGFuZ2VkRmlsZShDb2RleC5JQ29tbWl0RmlsZUxpbmsgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgY2hhbmdlIGFwcGxpZWQgdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkZpbGVDaGFuZ2VLaW5kIENoYW5nZUtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2hhbmdlS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRm9yIGEgcmVuYW1lZCBmaWxlLCB0aGUgcGF0aCB0byB0aGUgZmlsZSBwcmlvciB0byB0aGUgcmVuYW1lXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgT3JpZ2luYWxGaWxlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX09yaWdpbmFsRmlsZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9PcmlnaW5hbEZpbGVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb21taXRDaGFuZ2VkRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9DaGFuZ2VLaW5kID0gKChDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpKHZhbHVlKSkuQ2hhbmdlS2luZDtcclxuICAgICAgICAgICAgdGhpcy5tX09yaWdpbmFsRmlsZVBhdGggPSAoKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSkodmFsdWUpKS5PcmlnaW5hbEZpbGVQYXRoO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPENvbW1pdEZpbGVMaW5rPigoKENvZGV4LklDb21taXRGaWxlTGluaykodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBSZXByZXNlbnRzIGEgdmVyc2lvbiBvZiBhIHJlcG9zaXRvcnkgZmlsZSBmb3IgYSBjb21taXRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRGaWxlTGluayA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb21taXRGaWxlTGluayB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVmVyc2lvbkNvbnRyb2xGaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVMaW5rKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlTGluayhDb2RleC5JQ29tbWl0RmlsZUxpbmsgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVMaW5rPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlbGF0aXZlIHBhdGggaW4gdGhlIHJlcG9zaXRvcnkgdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZGVudGlmZXIgZm9yIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZGVudGlmZXIgZm9yIGZpbGUgY29udGVudCBhcyBkZXRlcm1pbmVkIGJ5IHZlcnNpb24gY29udHJvbFxyXG4gICAgICAgIC8vLyAoaS5lLiB0aGUgYmxvYiBoYXNoKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFZlcnNpb25Db250cm9sRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVmVyc2lvbkNvbnRyb2xGaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9WZXJzaW9uQ29udHJvbEZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdEZpbGVMaW5rIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZUxpbmsge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSAoKENvZGV4LklDb21taXRGaWxlTGluaykodmFsdWUpKS5GaWxlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9WZXJzaW9uQ29udHJvbEZpbGVJZCA9ICgoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSh2YWx1ZSkpLlZlcnNpb25Db250cm9sRmlsZUlkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVzY3JpYmVzIGEgYnJhbmNoIGluIGEgcmVwb3NpdG9yeVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQnJhbmNoKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBCcmFuY2ggOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQnJhbmNoIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0hlYWRDb21taXRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQnJhbmNoKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCcmFuY2goQ29kZXguSUJyYW5jaCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208QnJhbmNoPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGJyYW5jaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJyYW5jaCBkZXNjcmlwdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGhlYWQgY29tbWl0IG9mIHRoZSBicmFuY2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBIZWFkQ29tbWl0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9IZWFkQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9IZWFkQ29tbWl0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklCcmFuY2ggdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCcmFuY2gge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSUJyYW5jaCkodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSAoKENvZGV4LklCcmFuY2gpKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9IZWFkQ29tbWl0SWQgPSAoKENvZGV4LklCcmFuY2gpKHZhbHVlKSkuSGVhZENvbW1pdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIHNvdXJjZSBmaWxlIHdpdGggYXNzb2NpYXRlZCBzZW1hbnRpYyBiaW5kaW5nc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBCb3VuZFNvdXJjZUZpbGUgOiBCb3VuZFNvdXJjZUluZm8sIENvZGV4LklCb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZSBtX1NvdXJjZUZpbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZShDb2RleC5JQm91bmRTb3VyY2VGaWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Qm91bmRTb3VyY2VGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZUZpbGUoQ29kZXguSUJvdW5kU291cmNlSW5mbyB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZShDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VGaWxlIENvZGV4LklCb3VuZFNvdXJjZUZpbGUuU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlIFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlRmlsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUJvdW5kU291cmNlRmlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VGaWxlID0gbmV3IFNvdXJjZUZpbGUoKS5Db3B5RnJvbTxTb3VyY2VGaWxlPigoKENvZGV4LklCb3VuZFNvdXJjZUZpbGUpKHZhbHVlKSkuU291cmNlRmlsZSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208Qm91bmRTb3VyY2VJbmZvPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQm91bmRTb3VyY2VJbmZvIDogUHJvamVjdEZpbGVTY29wZUVudGl0eSwgQ29kZXguSUJvdW5kU291cmNlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uTnVsbGFibGU8aW50PiBtX1JlZmVyZW5jZUNvdW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGludD4gbV9EZWZpbml0aW9uQ291bnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9MYW5ndWFnZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UmVmZXJlbmNlU3Bhbj4gbV9SZWZlcmVuY2VzID0gQ29kZXguVXRpbGl0aWVzLkNvbGxlY3Rpb25VdGlsaXRpZXMuRW1wdHk8UmVmZXJlbmNlU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TcGFuPiBtX0RlZmluaXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblNwYW4+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENsYXNzaWZpY2F0aW9uU3Bhbj4gbV9DbGFzc2lmaWNhdGlvbnMgPSBDb2RleC5VdGlsaXRpZXMuQ29sbGVjdGlvblV0aWxpdGllcy5FbXB0eTxDbGFzc2lmaWNhdGlvblNwYW4+LkFycmF5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxPdXRsaW5pbmdSZWdpb24+IG1fT3V0bGluaW5nUmVnaW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PE91dGxpbmluZ1JlZ2lvbj4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VJbmZvKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VJbmZvKENvZGV4LklCb3VuZFNvdXJjZUluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxCb3VuZFNvdXJjZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlSW5mbyhDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbnVtYmVyIG9mIHJlZmVyZW5jZXMgaW4gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBSZWZlcmVuY2VDb3VudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VSZWZlcmVuY2VDb3VudCh0aGlzLm1fUmVmZXJlbmNlQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlQ291bnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBudW1iZXIgb2YgZGVmaW5pdGlvbnMgaW4gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBEZWZpbml0aW9uQ291bnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29lcmNlRGVmaW5pdGlvbkNvdW50KHRoaXMubV9EZWZpbml0aW9uQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbkNvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gVE9ETzogUmVtb3ZlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MYW5ndWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWZlcmVuY2VzIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZC4gTWF5IG92ZXJsYXAuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklSZWZlcmVuY2VTcGFuPiBDb2RleC5JQm91bmRTb3VyY2VJbmZvLlJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlZmVyZW5jZXMgZm9yIHRoZSBkb2N1bWVudC4gU29ydGVkLiBNYXkgb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UmVmZXJlbmNlU3Bhbj4gUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbml0aW9ucyBmb3IgdGhlIGRvY3VtZW50LiBTb3J0ZWQuIE5vIG92ZXJsYXA/XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklEZWZpbml0aW9uU3Bhbj4gQ29kZXguSUJvdW5kU291cmNlSW5mby5EZWZpbml0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluaXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZC4gTm8gb3ZlcmxhcD9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblNwYW4+IERlZmluaXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ2xhc3NpZmljYXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZCBieSBzdGFydCBpbmRleC4gTm8gb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSUNsYXNzaWZpY2F0aW9uU3Bhbj4gQ29kZXguSUJvdW5kU291cmNlSW5mby5DbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ2xhc3NpZmljYXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZCBieSBzdGFydCBpbmRleC4gTm8gb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q2xhc3NpZmljYXRpb25TcGFuPiBDbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE91dGxpbmluZyByZWdpb25zIGZvciB0aGUgZG9jdW1lbnQuIE1heSBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JT3V0bGluaW5nUmVnaW9uPiBDb2RleC5JQm91bmRTb3VyY2VJbmZvLk91dGxpbmluZ1JlZ2lvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuT3V0bGluaW5nUmVnaW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE91dGxpbmluZyByZWdpb25zIGZvciB0aGUgZG9jdW1lbnQuIE1heSBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxPdXRsaW5pbmdSZWdpb24+IE91dGxpbmluZ1JlZ2lvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9PdXRsaW5pbmdSZWdpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fT3V0bGluaW5nUmVnaW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgc2hvdWxkIGJlIGV4Y2x1ZGVkIGZyb20gdGV4dCBzZWFyY2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRXhjbHVkZUZyb21TZWFyY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQm91bmRTb3VyY2VJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQm91bmRTb3VyY2VJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZUNvdW50ID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLlJlZmVyZW5jZUNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbkNvdW50ID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkRlZmluaXRpb25Db3VudDtcclxuICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkxhbmd1YWdlO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZVNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuUmVmZXJlbmNlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPikodiA9PiBuZXcgUmVmZXJlbmNlU3BhbigpLkNvcHlGcm9tPFJlZmVyZW5jZVNwYW4+KHYpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3Bhbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3Bhbj4oKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkRlZmluaXRpb25zLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3Bhbj4pKHYgPT4gbmV3IERlZmluaXRpb25TcGFuKCkuQ29weUZyb208RGVmaW5pdGlvblNwYW4+KHYpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW4+KCgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5DbGFzc2lmaWNhdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW4+KSh2ID0+IG5ldyBDbGFzc2lmaWNhdGlvblNwYW4oKS5Db3B5RnJvbTxDbGFzc2lmaWNhdGlvblNwYW4+KHYpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fT3V0bGluaW5nUmVnaW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PE91dGxpbmluZ1JlZ2lvbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JT3V0bGluaW5nUmVnaW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuT3V0bGluaW5nUmVnaW9uPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuT3V0bGluaW5nUmVnaW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JT3V0bGluaW5nUmVnaW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLk91dGxpbmluZ1JlZ2lvbj4pKHYgPT4gbmV3IE91dGxpbmluZ1JlZ2lvbigpLkNvcHlGcm9tPE91dGxpbmluZ1JlZ2lvbj4odikpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9ICgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5PigoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IGEgc291cmNlIGZpbGUgYXMgZGVmaW5lZCBieSB0aGUgc291cmNlIGNvbnRyb2wgcHJvdmlkZXJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU291cmNlQ29udHJvbEZpbGVJbmZvIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VDb250cm9sRmlsZUluZm8oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyhDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVbmlxdWUgaWQgZm9yIHRoZSBzb3VyY2UgZmlsZSBjb250ZW50IGFzIGRlZmluZWQgYnkgdGhlIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChpLmUuIGdpdCBTSEEpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgU291cmNlQ29udHJvbENvbnRlbnRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlQ29udHJvbEZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQgPSAoKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8pKHZhbHVlKSkuU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTb3VyY2VGaWxlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU291cmNlRmlsZUluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTGluZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TaXplO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9XZWJBZGRyZXNzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRW5jb2RpbmdEZXNjcmlwdGlvbiBtX0VuY29kaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgUHJvcGVydHlNYXAgbV9Qcm9wZXJ0aWVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JU291cmNlRmlsZUluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZUluZm8oQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBudW1iZXIgb2YgbGluZXMgaW4gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xpbmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzaXplIG9mIHRoZSBmaWxlIGluIGJ5dGVzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU2l6ZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gVE9ETzogUmVtb3ZlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MYW5ndWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgd2ViIGFkZHJlc3Mgb2YgdGhlIGZpbGUuIFRPRE86IFJlbW92ZT8gSXMgcmVwbyByZWxhdGl2ZSBwYXRoIGVub3VnaD9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBXZWJBZGRyZXNzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1dlYkFkZHJlc3MgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBlbmNvZGluZyB1c2VkIGZvciB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24gQ29kZXguSVNvdXJjZUZpbGVJbmZvLkVuY29kaW5nIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkVuY29kaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGVuY29kaW5nIHVzZWQgZm9yIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBFbmNvZGluZ0Rlc2NyaXB0aW9uIEVuY29kaW5nIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRW5jb2Rpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FbmNvZGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRXh0ZW5zaWJsZSBrZXkgdmFsdWUgcHJvcGVydGllcyBmb3IgdGhlIGRvY3VtZW50LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVByb3BlcnR5TWFwIENvZGV4LklTb3VyY2VGaWxlSW5mby5Qcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBFeHRlbnNpYmxlIGtleSB2YWx1ZSBwcm9wZXJ0aWVzIGZvciB0aGUgZG9jdW1lbnQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBQcm9wZXJ0eU1hcCBQcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvcGVydGllcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb3BlcnRpZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvIHJlbGF0aXZlIHBhdGggdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVW5pcXVlIGlkIGZvciB0aGUgc291cmNlIGZpbGUgY29udGVudCBhcyBkZWZpbmVkIGJ5IHRoZSBzb3VyY2UgY29udHJvbCBwcm92aWRlciAoaS5lLiBnaXQgU0hBKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFNvdXJjZUNvbnRyb2xDb250ZW50SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3QgcmVsYXRpdmUgcGF0aCBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RSZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZCA9ICgoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykodmFsdWUpKS5Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSAoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZUZpbGVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZXMgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5MaW5lcztcclxuICAgICAgICAgICAgdGhpcy5tX1NpemUgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5TaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5MYW5ndWFnZTtcclxuICAgICAgICAgICAgdGhpcy5tX1dlYkFkZHJlc3MgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5XZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLm1fRW5jb2RpbmcgPSBuZXcgRW5jb2RpbmdEZXNjcmlwdGlvbigpLkNvcHlGcm9tPEVuY29kaW5nRGVzY3JpcHRpb24+KCgoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSh2YWx1ZSkpLkVuY29kaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb3BlcnRpZXMgPSBuZXcgUHJvcGVydHlNYXAoKS5Db3B5RnJvbTxQcm9wZXJ0eU1hcD4oKChDb2RleC5JU291cmNlRmlsZUluZm8pKHZhbHVlKSkuUHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkID0gKChDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSh2YWx1ZSkpLlNvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlc2NyaWJlcyBlbmNvZGluZyBzbyB0aGF0IGZpbGUgbWF5IGJlIHJlY29uc3RpdHV0ZWQgaW4gYSBieXRlLWlkZW50aWNhbCBmb3JtXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBFbmNvZGluZ0Rlc2NyaXB0aW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJ5dGVbXSBtX1ByZWFtYmxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBFbmNvZGluZ0Rlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBFbmNvZGluZ0Rlc2NyaXB0aW9uKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxFbmNvZGluZ0Rlc2NyaXB0aW9uPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGVuY29kaW5nXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZW5jb2RpbmcgcHJlYW1ibGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJ5dGVbXSBQcmVhbWJsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1ByZWFtYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJlYW1ibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRW5jb2RpbmdEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbikodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJlYW1ibGUgPSAoKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSh2YWx1ZSkpLlByZWFtYmxlO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyB0ZXh0IGNvbnRlbnRzIG9mIGEgZmlsZSBhbmQgYXNzb2NpYXRlZCBkYXRhXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTb3VyY2VGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTb3VyY2VGaWxlIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNvdXJjZUZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZUluZm8gbV9JbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29udGVudDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZShDb2RleC5JU291cmNlRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VGaWxlSW5mbyBDb2RleC5JU291cmNlRmlsZS5JbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlSW5mbyBJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0luZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb250ZW50IG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29udGVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBzaG91bGQgYmUgZXhjbHVkZWQgZnJvbSB0ZXh0IHNlYXJjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBFeGNsdWRlRnJvbVNlYXJjaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9JbmZvID0gbmV3IFNvdXJjZUZpbGVJbmZvKCkuQ29weUZyb208U291cmNlRmlsZUluZm8+KCgoQ29kZXguSVNvdXJjZUZpbGUpKHZhbHVlKSkuSW5mbyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db250ZW50ID0gKChDb2RleC5JU291cmNlRmlsZSkodmFsdWUpKS5Db250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSAoKENvZGV4LklTb3VyY2VGaWxlKSh2YWx1ZSkpLkV4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSU91dGxpbmluZ1JlZ2lvbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgT3V0bGluaW5nUmVnaW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSU91dGxpbmluZ1JlZ2lvbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9LaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgTGluZVNwYW4gbV9IZWFkZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBMaW5lU3BhbiBtX0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIE91dGxpbmluZ1JlZ2lvbigpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgT3V0bGluaW5nUmVnaW9uKENvZGV4LklPdXRsaW5pbmdSZWdpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPE91dGxpbmluZ1JlZ2lvbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgS2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0tpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgaGVhZGVyIHRleHQgb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklMaW5lU3BhbiBDb2RleC5JT3V0bGluaW5nUmVnaW9uLkhlYWRlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IZWFkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgaGVhZGVyIHRleHQgb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExpbmVTcGFuIEhlYWRlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0hlYWRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0hlYWRlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgcmVnaW9uIGNvbnRhaW5pbmcgdGhlIGNvbGxhcHNpYmxlIGNvbnRlbnQgcmVnaW9uIG9mIHRoZSBvdXRsaW5pbmcgcmVnaW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JTGluZVNwYW4gQ29kZXguSU91dGxpbmluZ1JlZ2lvbi5Db250ZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgY29sbGFwc2libGUgY29udGVudCByZWdpb24gb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExpbmVTcGFuIENvbnRlbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSU91dGxpbmluZ1JlZ2lvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IE91dGxpbmluZ1JlZ2lvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9LaW5kID0gKChDb2RleC5JT3V0bGluaW5nUmVnaW9uKSh2YWx1ZSkpLktpbmQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9IZWFkZXIgPSBuZXcgTGluZVNwYW4oKS5Db3B5RnJvbTxMaW5lU3Bhbj4oKChDb2RleC5JT3V0bGluaW5nUmVnaW9uKSh2YWx1ZSkpLkhlYWRlcik7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db250ZW50ID0gbmV3IExpbmVTcGFuKCkuQ29weUZyb208TGluZVNwYW4+KCgoQ29kZXguSU91dGxpbmluZ1JlZ2lvbikodmFsdWUpKS5Db250ZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRGVmaW5pdGlvblNwYW4gOiBTcGFuLCBDb2RleC5JRGVmaW5pdGlvblNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRGVmaW5pdGlvblN5bWJvbCBtX0RlZmluaXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFBhcmFtZXRlckRlZmluaXRpb25TcGFuPiBtX1BhcmFtZXRlcnMgPSBDb2RleC5VdGlsaXRpZXMuQ29sbGVjdGlvblV0aWxpdGllcy5FbXB0eTxQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNwYW4oQ29kZXguSURlZmluaXRpb25TcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208RGVmaW5pdGlvblNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZpbml0aW9uIHN5bWJvbCByZWZlcnJlZCB0byBieSB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSURlZmluaXRpb25TeW1ib2wgQ29kZXguSURlZmluaXRpb25TcGFuLkRlZmluaXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZpbml0aW9uIHN5bWJvbCByZWZlcnJlZCB0byBieSB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRGVmaW5pdGlvblN5bWJvbCBEZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgdGhlIGRlZmluaXRpb25zIGZvciBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4gQ29kZXguSURlZmluaXRpb25TcGFuLlBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgdGhlIGRlZmluaXRpb25zIGZvciBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFBhcmFtZXRlckRlZmluaXRpb25TcGFuPiBQYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklEZWZpbml0aW9uU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IERlZmluaXRpb25TcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvblN5bWJvbCgpLkNvcHlGcm9tPERlZmluaXRpb25TeW1ib2w+KCgoQ29kZXguSURlZmluaXRpb25TcGFuKSh2YWx1ZSkpLkRlZmluaXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRlZmluaXRpb25TcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRlZmluaXRpb25TcGFuPigoKENvZGV4LklEZWZpbml0aW9uU3BhbikodmFsdWUpKS5QYXJhbWV0ZXJzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4pKHYgPT4gbmV3IFBhcmFtZXRlckRlZmluaXRpb25TcGFuKCkuQ29weUZyb208UGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+KHYpKSkpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNwYW4+KCgoQ29kZXguSVNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gQSBzcGVjaWFsaXplZCBkZWZpbml0aW9uIHNwYW4gcmVmZXJyaW5nIHRvIGEgcGFyYW1ldGVyIG9mIGEgbWV0aG9kL3Byb3BlcnR5XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4gOiBMaW5lU3BhbiwgQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1BhcmFtZXRlckluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbihDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGluZGV4IG9mIHRoZSBwYXJhbWV0ZXIgaW4gdGhlIGxpc3Qgb2YgcGFyYW1ldGVycyBmb3IgdGhlIG1ldGhvZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFBhcmFtZXRlckluZGV4IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVySW5kZXggPSAoKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbikodmFsdWUpKS5QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbikodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPExpbmVTcGFuPigoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVmZXJlbmNlU3BhbiA6IFN5bWJvbFNwYW4sIENvZGV4LklSZWZlcmVuY2VTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbElkIG1fUmVsYXRlZERlZmluaXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBSZWZlcmVuY2VTeW1ib2wgbV9SZWZlcmVuY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+IG1fUGFyYW1ldGVycyA9IENvZGV4LlV0aWxpdGllcy5Db2xsZWN0aW9uVXRpbGl0aWVzLkVtcHR5PFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+LkFycmF5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3BhbihDb2RleC5JUmVmZXJlbmNlU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oQ29kZXguSVN5bWJvbFNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKENvZGV4LklUZXh0TGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKENvZGV4LklMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gR2V0cyB0aGUgc3ltYm9sIGlkIG9mIHRoZSBkZWZpbml0aW9uIHdoaWNoIHByb3ZpZGVzIHRoaXMgcmVmZXJlbmNlXHJcbiAgICAgICAgLy8vIChpLmUuIG1ldGhvZCBkZWZpbml0aW9uIGZvciBpbnRlcmZhY2UgaW1wbGVtZW50YXRpb24pXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xJZCBSZWxhdGVkRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlbGF0ZWREZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVsYXRlZERlZmluaXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWZlcmVuY2Ugc3ltYm9sIHJlZmVycmVkIHRvIGJ5IHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JUmVmZXJlbmNlU3ltYm9sIENvZGV4LklSZWZlcmVuY2VTcGFuLlJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbCByZWZlcnJlZCB0byBieSB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgUmVmZXJlbmNlU3ltYm9sIFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gR2V0cyB0aGUgcmVmZXJlbmNlcyB0byBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPiBDb2RleC5JUmVmZXJlbmNlU3Bhbi5QYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBHZXRzIHRoZSByZWZlcmVuY2VzIHRvIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4gUGFyYW1ldGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1BhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVmZXJlbmNlU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVsYXRlZERlZmluaXRpb24gPSAoKENvZGV4LklSZWZlcmVuY2VTcGFuKSh2YWx1ZSkpLlJlbGF0ZWREZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZVN5bWJvbCgpLkNvcHlGcm9tPFJlZmVyZW5jZVN5bWJvbD4oKChDb2RleC5JUmVmZXJlbmNlU3BhbikodmFsdWUpKS5SZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPigoKENvZGV4LklSZWZlcmVuY2VTcGFuKSh2YWx1ZSkpLlBhcmFtZXRlcnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4pKHYgPT4gbmV3IFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oKS5Db3B5RnJvbTxQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPih2KSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTeW1ib2xTcGFuPigoKENvZGV4LklTeW1ib2xTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEEgc3BlY2lhbGl6ZWQgcmVmZXJlbmNlIHNwYW4gcmVmZXJyaW5nIHRvIGEgcGFyYW1ldGVyIHRvIGEgbWV0aG9kL3Byb3BlcnR5XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuIDogU3ltYm9sU3BhbiwgQ29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbihDb2RleC5JU3ltYm9sU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oQ29kZXguSVRleHRMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW5kZXggb2YgdGhlIHBhcmFtZXRlciBpbiB0aGUgbGlzdCBvZiBwYXJhbWV0ZXJzIGZvciB0aGUgbWV0aG9kXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgUGFyYW1ldGVySW5kZXgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlckluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFBhcmFtZXRlclJlZmVyZW5jZVNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVySW5kZXggPSAoKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSh2YWx1ZSkpLlBhcmFtZXRlckluZGV4O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFN5bWJvbFNwYW4+KCgoQ29kZXguSVN5bWJvbFNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyBhIGNsYXNzaWZpZWQgc3BhbiBvZiB0ZXh0XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENsYXNzaWZpY2F0aW9uU3BhbiA6IFNwYW4sIENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9DbGFzc2lmaWNhdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0xvY2FsR3JvdXBJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ2xhc3NpZmljYXRpb25TcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ2xhc3NpZmljYXRpb25TcGFuKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDbGFzc2lmaWNhdGlvblNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENsYXNzaWZpY2F0aW9uU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVmYXVsdCBjbGFzc2lmaWNhdGlvbiBjb2xvciBmb3IgdGhlIHNwYW4uIFRoaXMgaXMgdXNlZCBmb3JcclxuICAgICAgICAvLy8gY29udGV4dHMgd2hlcmUgYSBtYXBwaW5nIGZyb20gY2xhc3NpZmljYXRpb24gaWQgdG8gY29sb3IgaXMgbm90XHJcbiAgICAgICAgLy8vIGF2YWlsYWJsZS5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBEZWZhdWx0Q2xhc3NpZmljYXRpb25Db2xvciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjbGFzc2lmaWNhdGlvbiBpZGVudGlmaWVyIGZvciB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENsYXNzaWZpY2F0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ2xhc3NpZmljYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgdG8gdGhlIGxvY2FsIGdyb3VwIG9mIHNwYW5zIHdoaWNoIHJlZmVyIHRvIHRoZSBzYW1lIGNvbW1vbiBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMb2NhbEdyb3VwSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Mb2NhbEdyb3VwSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Mb2NhbEdyb3VwSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDbGFzc2lmaWNhdGlvblNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3IgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKHZhbHVlKSkuRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbiA9ICgoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbikodmFsdWUpKS5DbGFzc2lmaWNhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX0xvY2FsR3JvdXBJZCA9ICgoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbikodmFsdWUpKS5Mb2NhbEdyb3VwSWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3Bhbj4oKChDb2RleC5JU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU3ltYm9sU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU3ltYm9sU3BhbiA6IFRleHRMaW5lU3BhbiwgQ29kZXguSVN5bWJvbFNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2xTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sU3BhbihDb2RleC5JU3ltYm9sU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFN5bWJvbFNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFNwYW4oQ29kZXguSVRleHRMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU3ltYm9sU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFN5bWJvbFNwYW4ge1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFRleHRMaW5lU3Bhbj4oKChDb2RleC5JVGV4dExpbmVTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklUZXh0TGluZVNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFRleHRMaW5lU3BhbiA6IExpbmVTcGFuLCBDb2RleC5JVGV4dExpbmVTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0xpbmVTcGFuVGV4dDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuKENvZGV4LklUZXh0TGluZVNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0TGluZVNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhbihDb2RleC5JTGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0TGluZVNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGxpbmUgdGV4dFxyXG4gICAgICAgIC8vLyBUT0RPOiBJdCB3b3VsZCBiZSBuaWNlIHRvIG5vdCBzdG9yZSB0aGlzIGhlcmUgYW5kIGluc3RlYWQgYXBwbHkgaXQgYXMgYSBqb2luXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTGluZVNwYW5UZXh0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGluZVNwYW5UZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZVNwYW5UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JVGV4dExpbmVTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogVGV4dExpbmVTcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX0xpbmVTcGFuVGV4dCA9ICgoQ29kZXguSVRleHRMaW5lU3BhbikodmFsdWUpKS5MaW5lU3BhblRleHQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208TGluZVNwYW4+KCgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklMaW5lU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTGluZVNwYW4gOiBTcGFuLCBDb2RleC5JTGluZVNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGludD4gbV9MaW5lSW5kZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uTnVsbGFibGU8aW50PiBtX0xpbmVOdW1iZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9MaW5lU3BhblN0YXJ0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTGluZU9mZnNldDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGluZVNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMaW5lU3BhbihDb2RleC5JTGluZVNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxMaW5lU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGluZVNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIDAtYmFzZWQgaW5kZXggb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExpbmVJbmRleCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VMaW5lSW5kZXgodGhpcy5tX0xpbmVJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MaW5lSW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSAxLWJhc2VkIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lTnVtYmVyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvZXJjZUxpbmVOdW1iZXIodGhpcy5tX0xpbmVOdW1iZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZU51bWJlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNoYXJhY3RlciBwb3NpdGlvbiB3aGVyZSB0aGUgc3BhbiBzdGFydHMgaW4gdGhlIGxpbmUgdGV4dFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExpbmVTcGFuU3RhcnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MaW5lU3BhblN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZVNwYW5TdGFydCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSWYgcG9zaXRpdmUsIHRoZSBvZmZzZXQgb2YgdGhlIGxpbmUgc3BhbiBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmVcclxuICAgICAgICAvLy8gSWYgbmVnYXRpdmUsIHRoZSBvZmZzZXQgb2YgdGhlIGxpbmVzcGFuIGZyb20gdGhlIGVuZCBvZiB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTGluZU9mZnNldCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xpbmVPZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MaW5lT2Zmc2V0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JTGluZVNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBMaW5lU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lSW5kZXggPSAoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKS5MaW5lSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lTnVtYmVyID0gKChDb2RleC5JTGluZVNwYW4pKHZhbHVlKSkuTGluZU51bWJlcjtcclxuICAgICAgICAgICAgdGhpcy5tX0xpbmVTcGFuU3RhcnQgPSAoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKS5MaW5lU3BhblN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZU9mZnNldCA9ICgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpLkxpbmVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3Bhbj4oKChDb2RleC5JU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU3BhbiA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1N0YXJ0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTGVuZ3RoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTcGFuKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTcGFuKENvZGV4LklTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGFic29sdXRlIGNoYXJhY3RlciBvZmZzZXQgb2YgdGhlIHNwYW4gd2l0aGluIHRoZSBkb2N1bWVudFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFN0YXJ0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TdGFydCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGxlbmd0aCBvZiB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExlbmd0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xlbmd0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX1N0YXJ0ID0gKChDb2RleC5JU3BhbikodmFsdWUpKS5TdGFydDtcclxuICAgICAgICAgICAgdGhpcy5tX0xlbmd0aCA9ICgoQ29kZXguSVNwYW4pKHZhbHVlKSkuTGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXcpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXcgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlldyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9JZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVXJsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguQ29kZVJldmlld1N0YXR1cyBtX1N0YXR1cztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlldygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlldyhDb2RleC5JQ29kZVJldmlldyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlldz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVXJsIGZvciBhY2Nlc3NpbmcgY29kZSByZXZpZXcgaW4gc291cmNlIGNvbnRyb2wgbWFuYWdlbWVudCAoaS5lLiBHaXRIdWIgb3IgVlNPKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFVybCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1VybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1VybCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkNvZGVSZXZpZXdTdGF0dXMgU3RhdHVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3RhdHVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhdHVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVJldmlldyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvZGVSZXZpZXcge1xyXG4gICAgICAgICAgICB0aGlzLm1fSWQgPSAoKENvZGV4LklDb2RlUmV2aWV3KSh2YWx1ZSkpLklkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSAoKENvZGV4LklDb2RlUmV2aWV3KSh2YWx1ZSkpLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fVXJsID0gKChDb2RleC5JQ29kZVJldmlldykodmFsdWUpKS5Vcmw7XHJcbiAgICAgICAgICAgIHRoaXMubV9TdGF0dXMgPSAoKENvZGV4LklDb2RlUmV2aWV3KSh2YWx1ZSkpLlN0YXR1cztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3SXRlcmF0aW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fSXRlcmF0aW9uTnVtYmVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmV2aWV3SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0ZpbGU+IG1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3RmlsZT4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0l0ZXJhdGlvbigpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0l0ZXJhdGlvbihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld0l0ZXJhdGlvbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgSXRlcmF0aW9uTnVtYmVyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSXRlcmF0aW9uTnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSXRlcmF0aW9uTnVtYmVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJldmlld0lkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmV2aWV3SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXZpZXdJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb2RlUmV2aWV3RmlsZT4gQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24uRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3RmlsZT4gRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvZGVSZXZpZXdJdGVyYXRpb24ge1xyXG4gICAgICAgICAgICB0aGlzLm1fSXRlcmF0aW9uTnVtYmVyID0gKChDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikodmFsdWUpKS5JdGVyYXRpb25OdW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXZpZXdJZCA9ICgoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKHZhbHVlKSkuUmV2aWV3SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9ICgoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdGaWxlPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3RmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdGaWxlPigoKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSh2YWx1ZSkpLkZpbGVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3RmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3RmlsZT4pKHYgPT4gbmV3IENvZGVSZXZpZXdGaWxlKCkuQ29weUZyb208Q29kZVJldmlld0ZpbGU+KHYpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdlckluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXdlckluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlld2VySW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3ZXJJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3ZXJJbmZvKENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb2RlUmV2aWV3ZXJJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld2VySW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JQ29kZVJldmlld2VySW5mbykodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3RmlsZSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3RmlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9CYXNlbGluZUZpbGVJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LkZpbGVDaGFuZ2VLaW5kIG1fQ2hhbmdlS2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0ZpbGUoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdGaWxlKENvZGV4LklDb2RlUmV2aWV3RmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld0ZpbGU+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlyc3QgaXRlcmF0aW9uIGluIHdoaWNoIHRoaXMgZmlsZSBhcHBlYXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU3RhcnRJdGVyYXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N0YXJ0SXRlcmF0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVsYXRpdmUgcGF0aCBpbiB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGUgaWQgb2YgdGhlIG5ldyB2ZXJzaW9uIG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlsZSBpZCBvZiB0aGUgYmFzZWxpbmUgdmVyc2lvbiBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEJhc2VsaW5lRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQmFzZWxpbmVGaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9CYXNlbGluZUZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgY2hhbmdlIGFwcGxpZWQgdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkZpbGVDaGFuZ2VLaW5kIENoYW5nZUtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2hhbmdlS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld0ZpbGUge1xyXG4gICAgICAgICAgICB0aGlzLm1fU3RhcnRJdGVyYXRpb24gPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gKChDb2RleC5JQ29kZVJldmlld0ZpbGUpKHZhbHVlKSkuRmlsZUlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fQmFzZWxpbmVGaWxlSWQgPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5CYXNlbGluZUZpbGVJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0NoYW5nZUtpbmQgPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3Q29tbWVudFRocmVhZCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBMaW5lU3BhbiBtX09yaWdpbmFsU3BhbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1N0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fTGFzdFVwZGF0ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0NvbW1lbnQ+IG1fQ29tbWVudHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3Q29tbWVudD4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0NvbW1lbnRUaHJlYWQoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdDb21tZW50VGhyZWFkKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld0NvbW1lbnRUaHJlYWQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgb3JpZ2luYWwgbG9jYXRpb24gZm9yIHRoZSBjb21tZW50IGluIHRoZSBvcmlnaW5hdGluZyBpdGVyYXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklMaW5lU3BhbiBDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQuT3JpZ2luYWxTcGFuIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk9yaWdpbmFsU3BhbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBvcmlnaW5hbCBsb2NhdGlvbiBmb3IgdGhlIGNvbW1lbnQgaW4gdGhlIG9yaWdpbmF0aW5nIGl0ZXJhdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgTGluZVNwYW4gT3JpZ2luYWxTcGFuIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fT3JpZ2luYWxTcGFuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fT3JpZ2luYWxTcGFuID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaXRlcmF0aW9uIHdoZXJlIHRoZSBjb21tZW50IG9yaWdpbmF0ZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTdGFydEl0ZXJhdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhcnRJdGVyYXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBsYXN0IHRpZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIExhc3RVcGRhdGVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGFzdFVwZGF0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MYXN0VXBkYXRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlUmVwb1JlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVSZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZVJlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb2RlUmV2aWV3Q29tbWVudD4gQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkLkNvbW1lbnRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbW1lbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0NvbW1lbnQ+IENvbW1lbnRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50cyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld0NvbW1lbnRUaHJlYWQge1xyXG4gICAgICAgICAgICB0aGlzLm1fT3JpZ2luYWxTcGFuID0gbmV3IExpbmVTcGFuKCkuQ29weUZyb208TGluZVNwYW4+KCgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSh2YWx1ZSkpLk9yaWdpbmFsU3Bhbik7XHJcbiAgICAgICAgICAgIHRoaXMubV9TdGFydEl0ZXJhdGlvbiA9ICgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSh2YWx1ZSkpLlN0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fTGFzdFVwZGF0ZWQgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkodmFsdWUpKS5MYXN0VXBkYXRlZDtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVSZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpKHZhbHVlKSkuRmlsZVJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50cyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdDb21tZW50PihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3Q29tbWVudCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdDb21tZW50PigoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkodmFsdWUpKS5Db21tZW50cywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0NvbW1lbnQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0NvbW1lbnQ+KSh2ID0+IG5ldyBDb2RlUmV2aWV3Q29tbWVudCgpLkNvcHlGcm9tPENvZGVSZXZpZXdDb21tZW50Pih2KSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZVJldmlld0NvbW1lbnQgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlld0NvbW1lbnQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVGV4dDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Jldmlld2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguQ29tbWVudEltcG9ydGFuY2UgbV9JbXBvcnRhbmNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fQ29tbWVudFRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdDb21tZW50KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3Q29tbWVudChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvZGVSZXZpZXdDb21tZW50Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBUZXh0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1RleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXZpZXdlciB3aGljaCBtYWRlIHRoZSBjb21tZW50XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmV2aWV3ZXIge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXZpZXdlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Jldmlld2VyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW1wb3J0YW5jZSBvZiB0aGUgY29tbWVudFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguQ29tbWVudEltcG9ydGFuY2UgSW1wb3J0YW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ltcG9ydGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JbXBvcnRhbmNlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGltZSB3aGVuIHRoZSBjb21tZW50IHdhcyBzdWJtaXR0ZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBDb21tZW50VGltZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1lbnRUaW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudFRpbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvZGVSZXZpZXdDb21tZW50IHtcclxuICAgICAgICAgICAgdGhpcy5tX1RleHQgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkodmFsdWUpKS5UZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm1fUmV2aWV3ZXIgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkodmFsdWUpKS5SZXZpZXdlcjtcclxuICAgICAgICAgICAgdGhpcy5tX0ltcG9ydGFuY2UgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkodmFsdWUpKS5JbXBvcnRhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWVudFRpbWUgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkodmFsdWUpKS5Db21tZW50VGltZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklMYW5ndWFnZUluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIExhbmd1YWdlSW5mbyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklMYW5ndWFnZUluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TdHlsZT4gbV9DbGFzc2lmaWNhdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDbGFzc2lmaWNhdGlvblN0eWxlPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMYW5ndWFnZUluZm8oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExhbmd1YWdlSW5mbyhDb2RleC5JTGFuZ3VhZ2VJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxMYW5ndWFnZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgbGFuZ3VhZ2VcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaWJlcyB0aGUgc3R5bGUgZm9yIGNsYXNzaWZpZWQgc3BhbnMuIFNlZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklCb3VuZFNvdXJjZUluZm8uQ2xhc3NpZmljYXRpb25zXCIgLz4uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlPiBDb2RleC5JTGFuZ3VhZ2VJbmZvLkNsYXNzaWZpY2F0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmliZXMgdGhlIHN0eWxlIGZvciBjbGFzc2lmaWVkIHNwYW5zLiBTZWUgPHNlZSBjcmVmPVwiUDpDb2RleC5JQm91bmRTb3VyY2VJbmZvLkNsYXNzaWZpY2F0aW9uc1wiIC8+LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDbGFzc2lmaWNhdGlvblN0eWxlPiBDbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklMYW5ndWFnZUluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBMYW5ndWFnZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSUxhbmd1YWdlSW5mbykodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TdHlsZT4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3R5bGU+KCgoQ29kZXguSUxhbmd1YWdlSW5mbykodmFsdWUpKS5DbGFzc2lmaWNhdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TdHlsZT4pKHYgPT4gbmV3IENsYXNzaWZpY2F0aW9uU3R5bGUoKS5Db3B5RnJvbTxDbGFzc2lmaWNhdGlvblN0eWxlPih2KSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlc2NyaWJlcyBzdHlsaW5nIGZvciBhIGdpdmVuIGNsYXNzaWZpY2F0aW9uXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDbGFzc2lmaWNhdGlvblN0eWxlIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fQ29sb3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIG1fSXRhbGljO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ2xhc3NpZmljYXRpb25TdHlsZSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ2xhc3NpZmljYXRpb25TdHlsZShDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q2xhc3NpZmljYXRpb25TdHlsZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZhdWx0IGNsYXNzaWZpY2F0aW9uIGNvbG9yIGZvciB0aGUgY2xhc3NpZmljYXRpb24uIFRoaXMgaXMgdXNlZCBmb3JcclxuICAgICAgICAvLy8gY29udGV4dHMgd2hlcmUgYSBtYXBwaW5nIGZyb20gY2xhc3NpZmljYXRpb24gaWQgdG8gY29sb3IgaXMgbm90XHJcbiAgICAgICAgLy8vIGF2YWlsYWJsZS5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBDb2xvciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzcGFucyBjbGFzc2lmaWVkIHdpdGggdGhpcyBjbGFzc2lmaWNhdGlvbiBzaG91bGQgaGF2ZSBpdGFsaWMgZm9udCBieSBkZWZhdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEl0YWxpYyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0l0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0l0YWxpYyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGNsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENsYXNzaWZpY2F0aW9uU3R5bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29sb3IgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSh2YWx1ZSkpLkNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLm1fSXRhbGljID0gKChDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSkodmFsdWUpKS5JdGFsaWM7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSkodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3QpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEFuYWx5emVkUHJvamVjdCA6IFByb2plY3RTY29wZUVudGl0eSwgQ29kZXguSVByb2plY3Qge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdEtpbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFByb2plY3RGaWxlTGluaz4gbV9GaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFByb2plY3RGaWxlTGluaz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVmZXJlbmNlZFByb2plY3Q+IG1fUHJvamVjdFJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZWZlcmVuY2VkUHJvamVjdD4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQW5hbHl6ZWRQcm9qZWN0KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQW5hbHl6ZWRQcm9qZWN0KENvZGV4LklQcm9qZWN0IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208QW5hbHl6ZWRQcm9qZWN0Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBBbmFseXplZFByb2plY3QoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEFuYWx5emVkUHJvamVjdChDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9qZWN0IGtpbmQgKHNlZSA8c2VlIGNyZWY9XCJUOkNvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RLaW5kXCIgLz4pXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdEtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0S2luZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RLaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWZlcmVuY2VzIHRvIGZpbGVzIGluIHRoZSBwcm9qZWN0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklQcm9qZWN0RmlsZUxpbms+IENvZGV4LklQcm9qZWN0LkZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVmZXJlbmNlcyB0byBmaWxlcyBpbiB0aGUgcHJvamVjdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQcm9qZWN0RmlsZUxpbms+IEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpcHRpb25zIG9mIHJlZmVyZW5jZWQgcHJvamVjdHMgYW5kIHVzZWQgZGVmaW5pdGlvbnMgZnJvbSB0aGUgcHJvamVjdHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVJlZmVyZW5jZWRQcm9qZWN0PiBDb2RleC5JUHJvamVjdC5Qcm9qZWN0UmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9qZWN0UmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaXB0aW9ucyBvZiByZWZlcmVuY2VkIHByb2plY3RzIGFuZCB1c2VkIGRlZmluaXRpb25zIGZyb20gdGhlIHByb2plY3RzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZWRQcm9qZWN0PiBQcm9qZWN0UmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RSZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQW5hbHl6ZWRQcm9qZWN0IHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RLaW5kID0gKChDb2RleC5JUHJvamVjdCkodmFsdWUpKS5Qcm9qZWN0S2luZDtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UHJvamVjdEZpbGVMaW5rPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklQcm9qZWN0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZUxpbms+KCgoQ29kZXguSVByb2plY3QpKHZhbHVlKSkuRmlsZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVByb2plY3RGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZUxpbms+KSh2ID0+IG5ldyBQcm9qZWN0RmlsZUxpbmsoKS5Db3B5RnJvbTxQcm9qZWN0RmlsZUxpbms+KHYpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZWZlcmVuY2VkUHJvamVjdD4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlZFByb2plY3QsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4oKChDb2RleC5JUHJvamVjdCkodmFsdWUpKS5Qcm9qZWN0UmVmZXJlbmNlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlZFByb2plY3QsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KSh2ID0+IG5ldyBSZWZlcmVuY2VkUHJvamVjdCgpLkNvcHlGcm9tPFJlZmVyZW5jZWRQcm9qZWN0Pih2KSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQcm9qZWN0U2NvcGVFbnRpdHk+KCgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlZFByb2plY3QpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlZmVyZW5jZWRQcm9qZWN0IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblN5bWJvbD4gbV9EZWZpbml0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TeW1ib2w+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EaXNwbGF5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFByb3BlcnR5TWFwIG1fUHJvcGVydGllcztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlZFByb2plY3QoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZWRQcm9qZWN0KENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlZFByb2plY3Q+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcmVmZXJlbmNlZCBwcm9qZWN0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVc2VkIGRlZmluaXRpb25zIGZvciB0aGUgcHJvamVjdC4gU29ydGVkLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JRGVmaW5pdGlvblN5bWJvbD4gQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0LkRlZmluaXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRlZmluaXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVXNlZCBkZWZpbml0aW9ucyBmb3IgdGhlIHByb2plY3QuIFNvcnRlZC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblN5bWJvbD4gRGVmaW5pdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWZpbml0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBwcm9qZWN0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGlzcGxheU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcHJvcGVydGllcyBvZiB0aGUgcHJvamVjdC4gU3VjaCBhcyBWZXJzaW9uLCBQdWJsaWNLZXksIGV0Yy5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklQcm9wZXJ0eU1hcCBDb2RleC5JUmVmZXJlbmNlZFByb2plY3QuUHJvcGVydGllcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHByb2plY3QuIFN1Y2ggYXMgVmVyc2lvbiwgUHVibGljS2V5LCBldGMuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBQcm9wZXJ0eU1hcCBQcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvcGVydGllcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb3BlcnRpZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZWRQcm9qZWN0IHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblN5bWJvbD4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KCgoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSh2YWx1ZSkpLkRlZmluaXRpb25zLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KSh2ID0+IG5ldyBEZWZpbml0aW9uU3ltYm9sKCkuQ29weUZyb208RGVmaW5pdGlvblN5bWJvbD4odikpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9EaXNwbGF5TmFtZSA9ICgoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSh2YWx1ZSkpLkRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvcGVydGllcyA9IG5ldyBQcm9wZXJ0eU1hcCgpLkNvcHlGcm9tPFByb3BlcnR5TWFwPigoKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCkodmFsdWUpKS5Qcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIE5PVEU6IERvIG5vdCBzZXQgPHNlZSBjcmVmPVwiUDpDb2RleC5JUmVwb1Njb3BlRW50aXR5LlJlcG9zaXRvcnlOYW1lXCIgLz5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlTGluaykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdEZpbGVMaW5rIDogUHJvamVjdEZpbGVTY29wZUVudGl0eSwgQ29kZXguSVByb2plY3RGaWxlTGluayB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlTGluaygpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlTGluayhDb2RleC5JUHJvamVjdEZpbGVMaW5rIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdEZpbGVMaW5rPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZUxpbmsoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVW5pcXVlIGlkZW50aWZpZXIgZm9yIGZpbGVcclxuICAgICAgICAvLy8gVE9ETzogTWFrZSB0aGlzIGNoZWNrc3VtIGFuZCBzZWFyY2hhYmxlIGFuZCB1c2UgZm9yIGRpc2NvdmVyaW5nIGNvbW1pdCBmcm9tIFBEQi5cclxuICAgICAgICAvLy8gVE9ETzogV2hhdCBpcyB0aGlzP1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEZpbGVJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RGaWxlTGluayB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlTGluayB7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSAoKENvZGV4LklQcm9qZWN0RmlsZUxpbmspKHZhbHVlKSkuRmlsZUlkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KCgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyBkb2N1bWVudGF0aW9uIGFib3V0IGEgc3ltYm9sXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRG9jdW1lbnRhdGlvbkluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5bWJvbCBtX0Fzc29jaWF0ZWRTeW1ib2w7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+IG1fUmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9TdW1tYXJ5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVtYXJrcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBtX0FyZ3VtZW50cyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gbV9UeXBlUGFyYW1ldGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gbV9FeGNlcHRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uSW5mbygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvbkluZm8oQ29kZXguSURvY3VtZW50YXRpb25JbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxEb2N1bWVudGF0aW9uSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWNsYXJhdGlvbiBuYW1lIGZvciB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVjbGFyYXRpb25OYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVjbGFyYXRpb25OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhcHBsaWVkIHRvIHRoZSBkZWZpbml0aW9uICh0aGlzIGlzIHRoZSByYXcgZG9jIGNvbW1lbnQgdGV4dClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb21tZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIElkZW50aXR5IG9mIHN5bWJvbCB3aGljaCBnZW5lcmF0ZWQgdGhpcyBkb2N1bWVudGF0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JQ29kZVN5bWJvbCBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8uQXNzb2NpYXRlZFN5bWJvbCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Bc3NvY2lhdGVkU3ltYm9sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSWRlbnRpdHkgb2Ygc3ltYm9sIHdoaWNoIGdlbmVyYXRlZCB0aGlzIGRvY3VtZW50YXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5bWJvbCBBc3NvY2lhdGVkU3ltYm9sIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQXNzb2NpYXRlZFN5bWJvbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Fzc29jaWF0ZWRTeW1ib2wgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBvdGhlciBzeW1ib2xzIHJlZmVyZW5jZWQgYnkgdGhpcyBzeW1ib2wgKGkuZS4gYmFzZSB0eXBlLCBpbXBsZW1lbnRlZCBpbnRlcmZhY2VcclxuICAgICAgICAvLy8gb3IgaW50ZXJmYWNlIG1lbWJlcnMsIG92ZXJyaWRkZW4gbWVtYmVycywgcmV0dXJuIHR5cGUgb2YgbWV0aG9kIG9yIHByb3BlcnR5IHR5cGUpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPiBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8uUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG90aGVyIHN5bWJvbHMgcmVmZXJlbmNlZCBieSB0aGlzIHN5bWJvbCAoaS5lLiBiYXNlIHR5cGUsIGltcGxlbWVudGVkIGludGVyZmFjZVxyXG4gICAgICAgIC8vLyBvciBpbnRlcmZhY2UgbWVtYmVycywgb3ZlcnJpZGRlbiBtZW1iZXJzLCByZXR1cm4gdHlwZSBvZiBtZXRob2Qgb3IgcHJvcGVydHkgdHlwZSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4gUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmliZXMgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFN1bW1hcnkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdW1tYXJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3VtbWFyeSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gU3VwcGxlbWVudGF0aW9uIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZW1hcmtzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVtYXJrcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlbWFya3MgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbW1lbnRzIG9uIGFyZ3VtZW50c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8uQXJndW1lbnRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbW1lbnRzIG9uIGFyZ3VtZW50c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IEFyZ3VtZW50cyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0FyZ3VtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0FyZ3VtZW50cyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tbWVudHMgb24gdHlwZSBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8uVHlwZVBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVHlwZVBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21tZW50cyBvbiB0eXBlIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gVHlwZVBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UeXBlUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1R5cGVQYXJhbWV0ZXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCBleGNlcHRpb25zIHdoaWNoIGNhbiBiZSB0aHJvd25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gQ29kZXguSURvY3VtZW50YXRpb25JbmZvLkV4Y2VwdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRXhjZXB0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IGV4Y2VwdGlvbnMgd2hpY2ggY2FuIGJlIHRocm93blxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IEV4Y2VwdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FeGNlcHRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjZXB0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURvY3VtZW50YXRpb25JbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRG9jdW1lbnRhdGlvbkluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVjbGFyYXRpb25OYW1lID0gKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9ICgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLkNvbW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Bc3NvY2lhdGVkU3ltYm9sID0gbmV3IFN5bWJvbCgpLkNvcHlGcm9tPFN5bWJvbD4oKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuQXNzb2NpYXRlZFN5bWJvbCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KCgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLlJlZmVyZW5jZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4pKHYgPT4gbmV3IERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woKS5Db3B5RnJvbTxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPih2KSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1N1bW1hcnkgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5TdW1tYXJ5O1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVtYXJrcyA9ICgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLlJlbWFya3M7XHJcbiAgICAgICAgICAgIHRoaXMubV9Bcmd1bWVudHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuQXJndW1lbnRzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPikodiA9PiBuZXcgVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKCkuQ29weUZyb208VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPih2KSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1R5cGVQYXJhbWV0ZXJzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRvY3VtZW50YXRpb24+KCgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLlR5cGVQYXJhbWV0ZXJzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRvY3VtZW50YXRpb24+KSh2ID0+IG5ldyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKCkuQ29weUZyb208UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4odikpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNlcHRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLkV4Y2VwdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KSh2ID0+IG5ldyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oKS5Db3B5RnJvbTxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KHYpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgYSBtZXRob2QgcGFyYW1ldGVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRvY3VtZW50YXRpb24oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRvY3VtZW50YXRpb24oQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFBhcmFtZXRlckRvY3VtZW50YXRpb24+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1lbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gKChDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikodmFsdWUpKS5Db21tZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgdHlwZWQgcGFyYW1ldGVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiA6IFBhcmFtZXRlckRvY3VtZW50YXRpb24sIENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCBtX1R5cGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbihDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbi5UeXBlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIFR5cGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9UeXBlID0gbmV3IERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woKS5Db3B5RnJvbTxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPigoKENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pKHZhbHVlKSkuVHlwZSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKChDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWNyaWJlcyBhIHN5bWJvbCByZWxhdGVkIHRvIGEgZ2l2ZW4gZG9jdW1lbnRlZCBzeW1ib2xcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgOiBSZWZlcmVuY2VTeW1ib2wsIENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rpc3BsYXlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKENvZGV4LklSZWZlcmVuY2VTeW1ib2wgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKENvZGV4LklDb2RlU3ltYm9sIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHN5bWJvbCByZWZlcmVuY2UgYXMgaXQgc2hvdWxkIGFwcGVhciBpbiBkb2N1bWVudGF0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGlzcGxheU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZmVyZW5jZVxyXG4gICAgICAgIC8vLyAoaS5lLiByZXR1cm4gdHlwZSBkZXNjcmlwdGlvbiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvY3NoYXJwL3Byb2dyYW1taW5nLWd1aWRlL3htbGRvYy9yZXR1cm5zKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1lbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIHtcclxuICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gKChDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpLkNvbW1lbnQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVmZXJlbmNlU3ltYm9sPigoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb3BlcnR5U2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0tleTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1ZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fT3duZXJJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvcGVydHlTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb3BlcnR5U2VhcmNoTW9kZWwoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9wZXJ0eVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9wZXJ0eVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGtleSBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBLZXkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9LZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBWYWx1ZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBvYmplY3Qgb3duaW5nIHRoaXMgcHJvcGVydHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBPd25lcklkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fT3duZXJJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX093bmVySWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvcGVydHlTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9LZXkgPSAoKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSh2YWx1ZSkpLktleTtcclxuICAgICAgICAgICAgdGhpcy5tX1ZhbHVlID0gKChDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCkodmFsdWUpKS5WYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tX093bmVySWQgPSAoKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSh2YWx1ZSkpLk93bmVySWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb3BlcnR5TWFwKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9wZXJ0eU1hcCA6IENvZGV4LklQcm9wZXJ0eU1hcCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb3BlcnR5TWFwKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9wZXJ0eU1hcChDb2RleC5JUHJvcGVydHlNYXAgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb3BlcnR5TWFwPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb3BlcnR5TWFwIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvcGVydHlNYXAge1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnkgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9JZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1dlYkFkZHJlc3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Tb3VyY2VDb250cm9sV2ViQWRkcmVzcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0ZpbGVXZWJBZGRyZXNzVHJhbnNmb3JtSW5wdXRSZWdleDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1ByaW1hcnlCcmFuY2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlcG9zaXRvcnlSZWZlcmVuY2U+IG1fUmVwb3NpdG9yeVJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZXBvc2l0b3J5UmVmZXJlbmNlPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5KENvZGV4LklSZXBvc2l0b3J5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvc2l0b3J5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgZm8gdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaWJlcyB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgV2ViQWRkcmVzcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1dlYkFkZHJlc3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9XZWJBZGRyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgd2ViIGFkZHJlc3MgZm9yIHNvdXJjZSBjb250cm9sIG9mIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgU291cmNlQ29udHJvbFdlYkFkZHJlc3Mge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VDb250cm9sV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xXZWJBZGRyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVnZXggZm9yIGV4dHJhY3RpbmdcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBwcmltYXJ5IGJyYW5jaCBmb3IgdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcmltYXJ5QnJhbmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJpbWFyeUJyYW5jaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1ByaW1hcnlCcmFuY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlPiBDb2RleC5JUmVwb3NpdG9yeS5SZXBvc2l0b3J5UmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZXBvc2l0b3J5UmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlcG9zaXRvcnlSZWZlcmVuY2U+IFJlcG9zaXRvcnlSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeVJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5UmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9zaXRvcnkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvc2l0b3J5IHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9JZCA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9XZWJBZGRyZXNzID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5XZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbFdlYkFkZHJlc3MgPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLlNvdXJjZUNvbnRyb2xXZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZVdlYkFkZHJlc3NUcmFuc2Zvcm1JbnB1dFJlZ2V4ID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXg7XHJcbiAgICAgICAgICAgIHRoaXMubV9QcmltYXJ5QnJhbmNoID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5QcmltYXJ5QnJhbmNoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeVJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZXBvc2l0b3J5UmVmZXJlbmNlPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZT4oKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5SZXBvc2l0b3J5UmVmZXJlbmNlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5UmVmZXJlbmNlPikodiA9PiBuZXcgUmVwb3NpdG9yeVJlZmVyZW5jZSgpLkNvcHlGcm9tPFJlcG9zaXRvcnlSZWZlcmVuY2U+KHYpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnlSZWZlcmVuY2UgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9zaXRvcnlSZWZlcmVuY2UoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9zaXRvcnlSZWZlcmVuY2UoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlcG9zaXRvcnlSZWZlcmVuY2U+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmVmZXJlbmNlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE9wdGlvbmFsLiBJZCBvZiByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlcG9zaXRvcnlSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UpKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0lkID0gKChDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSkodmFsdWUpKS5JZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIE1hcmtlciBpbnRlcmZhY2UgZm9yIHNlYXJjaGFibGUgZW50aXRpZXNcclxuICAgIC8vLyBUT0RPOiBDb25zaWRlciBtb3ZpbmcgPHNlZSBjcmVmPVwiUDpDb2RleC5JU2VhcmNoRW50aXR5LkVudGl0eUNvbnRlbnRJZFwiIC8+IG91dCBpZiBpdHMgbm90IG5lZWRlZCBieSBhbGwgc2VhcmNoYWJsZSBlbnRpdGllc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU2VhcmNoRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTZWFyY2hFbnRpdHkgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU2VhcmNoRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1VpZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0VudGl0eUNvbnRlbnRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0VudGl0eUNvbnRlbnRTaXplO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGxvbmc+IG1fRW50aXR5VmVyc2lvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGxvbmcgbV9TaGFyZFN0YWJsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNlYXJjaEVudGl0eShDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFVpZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1VpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1VpZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgY29udGVudCBhZGRyZXNzYWJsZSBpZGVudGlmaWVyIGZvciB0aGUgZW50aXR5LiBUaGlzIGlzIHVzZWRcclxuICAgICAgICAvLy8gdG8gZGV0ZXJtaW5lIGlmIGFuIGVudGl0eSB3aXRoIHRoZSBzYW1lIDxzZWUgY3JlZj1cIlA6Q29kZXguSVNlYXJjaEVudGl0eS5VaWRcIiAvPiBzaG91bGQgYmUgdXBkYXRlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEVudGl0eUNvbnRlbnRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0VudGl0eUNvbnRlbnRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0VudGl0eUNvbnRlbnRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgc2l6ZSBvZiB0aGUgcmF3IHNlcmlhbGl6ZWQgZW50aXR5LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IEVudGl0eUNvbnRlbnRTaXplIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRW50aXR5Q29udGVudFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FbnRpdHlDb250ZW50U2l6ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHZlcnNpb24gbnVtYmVyIHVzZWQgd2hlbiBzdG9yaW5nIHRoZSBlbnRpdHkgKGZvciB1c2UgYnkgRWxhc3RpY1NlYXJjaCBjb25jdXJyZW5jeSBjb250cm9sXHJcbiAgICAgICAgLy8vIHRvIHByZXZlbnQgcmFjZXMgd2hlbiBzdG9yaW5nIHZhbHVlcylcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5OdWxsYWJsZTxsb25nPiBFbnRpdHlWZXJzaW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRW50aXR5VmVyc2lvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0VudGl0eVZlcnNpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwZXItc2hhcmQgc3RhYmxlIGlkZW50aXR5IChkZXJpdmVkIGZyb20gRWxhc3RpY1NlYXJjaCBzZXF1ZW5jZSBudW1iZXIpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBsb25nIFNoYXJkU3RhYmxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TaGFyZFN0YWJsZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU2hhcmRTdGFibGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNlYXJjaEVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9VaWQgPSAoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkuVWlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRW50aXR5Q29udGVudElkID0gKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpLkVudGl0eUNvbnRlbnRJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0VudGl0eUNvbnRlbnRTaXplID0gKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpLkVudGl0eUNvbnRlbnRTaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1fRW50aXR5VmVyc2lvbiA9ICgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKS5FbnRpdHlWZXJzaW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fU2hhcmRTdGFibGVJZCA9ICgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKS5TaGFyZFN0YWJsZUlkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9TY29wZUVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb1Njb3BlRW50aXR5IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVJlcG9TY29wZUVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb1Njb3BlRW50aXR5KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvU2NvcGVFbnRpdHkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVwb1Njb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb1Njb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRTY29wZUVudGl0eSA6IFJlcG9TY29wZUVudGl0eSwgQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1pdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTY29wZUVudGl0eSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNjb3BlRW50aXR5KENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdFNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTY29wZUVudGl0eShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyBjb21taXQvY2hhbmdlc2V0IGluIHZlcnNpb24gY29udHJvbFxyXG4gICAgICAgIC8vLyAoaS5lLiBnaXQgY29tbWl0IGhhc2ggb3IgVEZTIGNoYW5nZXNldCBudW1iZXIpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29tbWl0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb21taXRTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21taXRJZCA9ICgoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5KSh2YWx1ZSkpLkNvbW1pdElkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFJlcG9TY29wZUVudGl0eT4oKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb2plY3RTY29wZUVudGl0eSA6IFJlcG9TY29wZUVudGl0eSwgQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTY29wZUVudGl0eSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTY29wZUVudGl0eShDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdFNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0U2NvcGVFbnRpdHkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0U2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZXBvU2NvcGVFbnRpdHk+KCgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb0ZpbGVTY29wZUVudGl0eSA6IFJlcG9TY29wZUVudGl0eSwgQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb0ZpbGVTY29wZUVudGl0eSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9GaWxlU2NvcGVFbnRpdHkoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvRmlsZVNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvRmlsZVNjb3BlRW50aXR5KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG8gcmVsYXRpdmUgcGF0aCB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvRmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVwb1Njb3BlRW50aXR5PigoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb2plY3RGaWxlU2NvcGVFbnRpdHkgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlU2NvcGVFbnRpdHkoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9qZWN0IHJlbGF0aXZlIHBhdGggb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0UmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvIHJlbGF0aXZlIHBhdGggdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdEZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdEZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdEZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluIG9yZGVyIHRvIGNvbXB1dGUgYSBzdGFibGUgaW50ZWdyYWwgaWQgZm9yIGVhY2ggZW50aXR5LiBUaGlzIHR5cGUgaXMgdXNlZCB0byBzdG9yZSBpbnRvIGEgJ2ZvbGxvdycgaW5kZXggd2hpY2hcclxuICAgIC8vLyBzdG9yZXMgZW50aXRpZXMgb2YgdGhpcyB0eXBlIHVzaW5nIHRoZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklTZWFyY2hFbnRpdHkuVWlkXCIgLz4gb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VhcmNoIGVudGl0eS4gVGhlbiB0aGVcclxuICAgIC8vLyBzZXF1ZW5jZSBudW1iZXIgYXNzaWduZWQgYnkgRWxhc3RpY1NlYXJjaCBpcyB1c2VkIGFzIHRoZSBzaGFyZCBzdGFibGUgaWQgKDxzZWUgY3JlZj1cIlA6Q29kZXguSVNlYXJjaEVudGl0eS5TaGFyZFN0YWJsZUlkXCIgLz4pXHJcbiAgICAvLy8gZm9yIHRoZSBlbnRpdHkuIFRoaXMgYXBwcm9hY2ggaXMgdXNlZCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc3RhYmxlIGlkIGFwcGVhcnMgYXMgYW4gZXhwbGljaXQgZmllbGQgaW4gdGhlIGRvY3VtZW50IHJhdGhlclxyXG4gICAgLy8vIHdoaWNoIGFsbG93cyBjb25maWd1cmF0aW9uIG9mIGhvdyB0aGUgZmllbGQgaXMgaW5kZXhlZCAobm90IHRydWUgZm9yIHNlcXVlbmNlIG51bWJlciBmaWVsZCB3aXRob3V0IGNvZGUgY2hhbmdlcyB0byBFUykuXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZWdpc3RlcmVkRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZWdpc3RlcmVkRW50aXR5IDogU2VhcmNoRW50aXR5LCBDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uRGF0ZVRpbWUgbV9EYXRlQWRkZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyZWRFbnRpdHkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlcmVkRW50aXR5KENvZGV4LklSZWdpc3RlcmVkRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVnaXN0ZXJlZEVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJlZEVudGl0eShDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkYXRlIGluIHdoaWNoIHRoZSBlbnRpdHkgd2FzIHJlZ2lzdGVyZWQgKGkuZS4gYWRkZWQgdG8gdGhlIHN0b3JlKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIERhdGVBZGRlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RhdGVBZGRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RhdGVBZGRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWdpc3RlcmVkRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX0RhdGVBZGRlZCA9ICgoQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkpKHZhbHVlKSkuRGF0ZUFkZGVkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlZmluZXMgYSBzdG9yZWQgZmlsdGVyIHdoaWNoIG1hdGNoZXMgZW50aXRpZXMgaW4gYSBwYXJ0aWN1bGFyIGluZGV4IHNoYXJkIGluIGEgc3RhYmxlIG1hbm5lclxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU3RvcmVkRmlsdGVyKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTdG9yZWRGaWx0ZXIgOiBTZWFyY2hFbnRpdHksIENvZGV4LklTdG9yZWRGaWx0ZXIge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fRGF0ZVVwZGF0ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9JbmRleE5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TaGFyZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8bG9uZz4gbV9TdGFibGVJZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxsb25nPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IG1fQmFzZVVpZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGJ5dGVbXT4gbV9VbmlvbkZpbHRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxieXRlW10+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBieXRlW10gbV9GaWx0ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWx0ZXJIYXNoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fRmlsdGVyQ291bnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN0b3JlZEZpbHRlcigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN0b3JlZEZpbHRlcihDb2RleC5JU3RvcmVkRmlsdGVyIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3RvcmVkRmlsdGVyPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRGaWx0ZXIoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGltZSBvZiB0aGUgbGFzdCB1cGRhdGUgdG8gdGhlIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBEYXRlVXBkYXRlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RhdGVVcGRhdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGF0ZVVwZGF0ZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBpbmRleCB0byB3aGljaCB0aGUgc3RvcmVkIGZpbHRlciBhcHBsaWVzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgSW5kZXhOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSW5kZXhOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSW5kZXhOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc2hhcmQgdG8gd2hpY2ggdGhlIHN0b3JlZCBmaWx0ZXIgYXBwbGllc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFNoYXJkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU2hhcmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TaGFyZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiBzdGFibGUgaWRzIHRvIGluY2x1ZGUgaW4gdGhlIHN0b3JlZCBmaWx0ZXIuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PGxvbmc+IENvZGV4LklTdG9yZWRGaWx0ZXIuU3RhYmxlSWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlN0YWJsZUlkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RhYmxlIGlkcyB0byBpbmNsdWRlIGluIHRoZSBzdG9yZWQgZmlsdGVyLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxsb25nPiBTdGFibGVJZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdGFibGVJZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TdGFibGVJZHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2YgdWlkcyB0byBmb3Igc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8c3RyaW5nPiBDb2RleC5JU3RvcmVkRmlsdGVyLkJhc2VVaWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhc2VVaWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiB1aWRzIHRvIGZvciBzdG9yZWQgZmlsdGVycyB3aGljaCB3aWxsIGJlIHVuaW9uZWQgd2l0aCB0aGUgZ2l2ZW4gc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IEJhc2VVaWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQmFzZVVpZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9CYXNlVWlkcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiBzdG9yZWQgZmlsdGVycyB3aGljaCB3aWxsIGJlIHVuaW9uZWQgd2l0aCB0aGUgZ2l2ZW4gc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxieXRlW10+IENvZGV4LklTdG9yZWRGaWx0ZXIuVW5pb25GaWx0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlVuaW9uRmlsdGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Ynl0ZVtdPiBVbmlvbkZpbHRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9VbmlvbkZpbHRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9VbmlvbkZpbHRlcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzdG9yZWQgZmlsdGVyIGJpdCBzZXQgd2hpY2ggbWF0Y2hlcyB0aGUgc3RvcmVkIGZpbHRlciBkb2N1bWVudHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJ5dGVbXSBGaWx0ZXIge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWx0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWx0ZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBoYXNoIG9mIDxzZWUgY3JlZj1cIlA6Q29kZXguSVN0b3JlZEZpbHRlci5GaWx0ZXJcIiAvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEZpbHRlckhhc2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWx0ZXJIYXNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsdGVySGFzaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvdW50IG9mIGVsZW1lbnRzIG1hdGNoZWQgYnkgPHNlZSBjcmVmPVwiUDpDb2RleC5JU3RvcmVkRmlsdGVyLkZpbHRlclwiIC8+XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgRmlsdGVyQ291bnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWx0ZXJDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbHRlckNvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU3RvcmVkRmlsdGVyIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU3RvcmVkRmlsdGVyIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RhdGVVcGRhdGVkID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkRhdGVVcGRhdGVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fSW5kZXhOYW1lID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkluZGV4TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1NoYXJkID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLlNoYXJkO1xyXG4gICAgICAgICAgICB0aGlzLm1fU3RhYmxlSWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8bG9uZz4oKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLlN0YWJsZUlkcyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9CYXNlVWlkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4oKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkJhc2VVaWRzKTtcclxuICAgICAgICAgICAgdGhpcy5tX1VuaW9uRmlsdGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGJ5dGVbXT4oKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLlVuaW9uRmlsdGVycyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWx0ZXIgPSAoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuRmlsdGVyO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsdGVySGFzaCA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5GaWx0ZXJIYXNoO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsdGVyQ291bnQgPSAoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuRmlsdGVyQ291bnQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRGVmaW5pdGlvblNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIERlZmluaXRpb25TeW1ib2wgbV9EZWZpbml0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU2VhcmNoTW9kZWwoQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPERlZmluaXRpb25TZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklEZWZpbml0aW9uU3ltYm9sIENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwuRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIERlZmluaXRpb25TeW1ib2wgRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRGVmaW5pdGlvblNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvblN5bWJvbCgpLkNvcHlGcm9tPERlZmluaXRpb25TeW1ib2w+KCgoQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCkodmFsdWUpKS5EZWZpbml0aW9uKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTGFuZ3VhZ2VTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgTGFuZ3VhZ2VJbmZvIG1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExhbmd1YWdlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMYW5ndWFnZVNlYXJjaE1vZGVsKENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208TGFuZ3VhZ2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGFuZ3VhZ2VTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JTGFuZ3VhZ2VJbmZvIENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsLkxhbmd1YWdlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxhbmd1YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExhbmd1YWdlSW5mbyBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xhbmd1YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogTGFuZ3VhZ2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9MYW5ndWFnZSA9IG5ldyBMYW5ndWFnZUluZm8oKS5Db3B5RnJvbTxMYW5ndWFnZUluZm8+KCgoQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwpKHZhbHVlKSkuTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVmZXJlbmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeW1ib2wgbV9SZWZlcmVuY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFN5bWJvbFNwYW4+IG1fU3BhbnMgPSBDb2RleC5VdGlsaXRpZXMuQ29sbGVjdGlvblV0aWxpdGllcy5FbXB0eTxTeW1ib2xTcGFuPi5BcnJheTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklTeW1ib2xMaW5lU3Bhbkxpc3QgbV9Db21wcmVzc2VkU3BhbnM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUNvZGVTeW1ib2wgQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsLlJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3ltYm9sIFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVN5bWJvbFNwYW4+IENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbC5TcGFucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TcGFucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFN5bWJvbFNwYW4+IFNwYW5zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvZXJjZVNwYW5zKHRoaXMubV9TcGFucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TcGFucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5JU3ltYm9sTGluZVNwYW5MaXN0IENvbXByZXNzZWRTcGFucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbXByZXNzZWRTcGFucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRTcGFucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3QgcmVsYXRpdmUgcGF0aCBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RSZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG8gcmVsYXRpdmUgcGF0aCB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZSA9IG5ldyBTeW1ib2woKS5Db3B5RnJvbTxTeW1ib2w+KCgoQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsKSh2YWx1ZSkpLlJlZmVyZW5jZSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9TcGFucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFN5bWJvbFNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVN5bWJvbFNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xTcGFuPigoKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCkodmFsdWUpKS5TcGFucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JU3ltYm9sU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xTcGFuPikodiA9PiBuZXcgU3ltYm9sU3BhbigpLkNvcHlGcm9tPFN5bWJvbFNwYW4+KHYpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZFNwYW5zID0gKChDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuQ29tcHJlc3NlZFNwYW5zO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSAoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU291cmNlU2VhcmNoTW9kZWxCYXNlIDogU2VhcmNoRW50aXR5LCBDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBtX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VTZWFyY2hNb2RlbEJhc2UoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VTZWFyY2hNb2RlbEJhc2UoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZVNlYXJjaE1vZGVsQmFzZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlU2VhcmNoTW9kZWxCYXNlKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyBDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlLlNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlQ29udHJvbEZpbGVJbmZvIFNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZVNlYXJjaE1vZGVsQmFzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IG5ldyBTb3VyY2VDb250cm9sRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KCgoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSkodmFsdWUpKS5Tb3VyY2VDb250cm9sSW5mbyk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEJvdW5kU291cmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1RleHRVaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VGaWxlSW5mbyBtX1NvdXJjZUluZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBCb3VuZFNvdXJjZUluZm8gbV9CaW5kaW5nSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklDbGFzc2lmaWNhdGlvbkxpc3QgbV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguSVJlZmVyZW5jZUxpc3QgbV9Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBtX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VTZWFyY2hNb2RlbChDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEJvdW5kU291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEJvdW5kU291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGFzc29jaWF0ZWQgPHNlZSBjcmVmPVwiVDpDb2RleC5JU291cmNlRmlsZVwiIC8+XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVGV4dFVpZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1RleHRVaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UZXh0VWlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VGaWxlSW5mbyBDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbC5Tb3VyY2VJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUZpbGVJbmZvIFNvdXJjZUluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJpbmRpbmcgaW5mb1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUJvdW5kU291cmNlSW5mbyBDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbC5CaW5kaW5nSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CaW5kaW5nSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBiaW5kaW5nIGluZm9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEJvdW5kU291cmNlSW5mbyBCaW5kaW5nSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0JpbmRpbmdJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQmluZGluZ0luZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBjbGFzc2lmaWNhdGlvbiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSUNsYXNzaWZpY2F0aW9uTGlzdCBDb21wcmVzc2VkQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiByZWZlcmVuY2Ugc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LklSZWZlcmVuY2VMaXN0IENvbXByZXNzZWRSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyBDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlLlNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlQ29udHJvbEZpbGVJbmZvIFNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJvdW5kU291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBuZXcgU291cmNlQ29udHJvbEZpbGVJbmZvKCkuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPigoKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UpKHZhbHVlKSkuU291cmNlQ29udHJvbEluZm8pO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1RleHRVaWQgPSAoKENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSh2YWx1ZSkpLlRleHRVaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VJbmZvID0gbmV3IFNvdXJjZUZpbGVJbmZvKCkuQ29weUZyb208U291cmNlRmlsZUluZm8+KCgoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuU291cmNlSW5mbyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9CaW5kaW5nSW5mbyA9IG5ldyBCb3VuZFNvdXJjZUluZm8oKS5Db3B5RnJvbTxCb3VuZFNvdXJjZUluZm8+KCgoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuQmluZGluZ0luZm8pO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyA9ICgoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRSZWZlcmVuY2VzID0gKChDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCkodmFsdWUpKS5Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IG5ldyBTb3VyY2VDb250cm9sRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KCgoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSkodmFsdWUpKS5Tb3VyY2VDb250cm9sSW5mbyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBUZXh0U291cmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZSBtX0ZpbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VDb250cm9sRmlsZUluZm8gbV9Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0U291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRTb3VyY2VTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0U291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUZpbGUgQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbC5GaWxlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlRmlsZSBGaWxlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZS5Tb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBTb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBUZXh0U291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBuZXcgU291cmNlQ29udHJvbEZpbGVJbmZvKCkuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPigoKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UpKHZhbHVlKSkuU291cmNlQ29udHJvbEluZm8pO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFRleHRTb3VyY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlID0gbmV3IFNvdXJjZUZpbGUoKS5Db3B5RnJvbTxTb3VyY2VGaWxlPigoKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuRmlsZSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBuZXcgU291cmNlQ29udHJvbEZpbGVJbmZvKCkuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPigoKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UpKHZhbHVlKSkuU291cmNlQ29udHJvbEluZm8pO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb3NpdG9yeVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlcG9zaXRvcnkgbV9SZXBvc2l0b3J5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U2VhcmNoTW9kZWwoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlcG9zaXRvcnlTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklSZXBvc2l0b3J5IENvZGV4LklSZXBvc2l0b3J5U2VhcmNoTW9kZWwuUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlcG9zaXRvcnkgUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb3NpdG9yeVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnkgPSBuZXcgUmVwb3NpdG9yeSgpLkNvcHlGcm9tPFJlcG9zaXRvcnk+KCgoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCkodmFsdWUpKS5SZXBvc2l0b3J5KTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0U2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQW5hbHl6ZWRQcm9qZWN0IG1fUHJvamVjdDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNlYXJjaE1vZGVsKENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0U2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JUHJvamVjdCBDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsLlByb2plY3Qge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUHJvamVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBBbmFseXplZFByb2plY3QgUHJvamVjdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3QgPSBuZXcgQW5hbHl6ZWRQcm9qZWN0KCkuQ29weUZyb208QW5hbHl6ZWRQcm9qZWN0PigoKENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwpKHZhbHVlKSkuUHJvamVjdCk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlZmVyZW5jZWRQcm9qZWN0IG1fUHJvamVjdFJlZmVyZW5jZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0IENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwuUHJvamVjdFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9qZWN0UmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlZmVyZW5jZWRQcm9qZWN0IFByb2plY3RSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeSBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvc2l0b3J5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlZFByb2plY3QoKS5Db3B5RnJvbTxSZWZlcmVuY2VkUHJvamVjdD4oKChDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSh2YWx1ZSkpLlByb2plY3RSZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0U2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklDb21taXRTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb21taXQgbV9Db21taXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0U2VhcmNoTW9kZWwoQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0U2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklDb21taXQgQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsLkNvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29tbWl0IENvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1pdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0U2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0ID0gbmV3IENvbW1pdCgpLkNvcHlGcm9tPENvbW1pdD4oKChDb2RleC5JQ29tbWl0U2VhcmNoTW9kZWwpKHZhbHVlKSkuQ29tbWl0KTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUaGUgc2V0IG9mIGZpbGVzIHByZXNlbnQgaW4gdGhlIHJlcG9zaXRvcnkgYXQgYSBnaXZlbiBjb21taXQuXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRGaWxlc1NlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPiBtX0NvbW1pdEZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21taXRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc1NlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbChDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVzU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0RmlsZXNTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbChDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0RmlsZXNTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb21taXRGaWxlTGluaz4gQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwuQ29tbWl0RmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tbWl0RmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4gQ29tbWl0RmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXRGaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdEZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgY29tbWl0L2NoYW5nZXNldCBpbiB2ZXJzaW9uIGNvbnRyb2xcclxuICAgICAgICAvLy8gKGkuZS4gZ2l0IGNvbW1pdCBoYXNoIG9yIFRGUyBjaGFuZ2VzZXQgbnVtYmVyKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1pdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVzU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSAoKENvZGV4LklDb21taXRTY29wZUVudGl0eSkodmFsdWUpKS5Db21taXRJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21taXRGaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluayxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPigoKENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsKSh2YWx1ZSkpLkNvbW1pdEZpbGVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4pKHYgPT4gbmV3IENvbW1pdEZpbGVMaW5rKCkuQ29weUZyb208Q29tbWl0RmlsZUxpbms+KHYpKSkpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1pdElkID0gKChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKHZhbHVlKSkuQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklGaWxlU3RhdGlzdGljcykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRmlsZVN0YXRpc3RpY3MgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JRmlsZVN0YXRpc3RpY3Mge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBGaWxlU3RhdGlzdGljcygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRmlsZVN0YXRpc3RpY3MoQ29kZXguSUZpbGVTdGF0aXN0aWNzIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxGaWxlU3RhdGlzdGljcz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklGaWxlU3RhdGlzdGljcyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEZpbGVTdGF0aXN0aWNzIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluZm9ybWF0aW9uIGZvciBjcmVhdGluZyBhbiBJQ29kZXhSZXBvc2l0b3J5U3RvcmVcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnlTdG9yZUluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBSZXBvc2l0b3J5IG1fUmVwb3NpdG9yeTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIEJyYW5jaCBtX0JyYW5jaDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvbW1pdCBtX0NvbW1pdDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVN0b3JlSW5mbygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVN0b3JlSW5mbyhDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVwb3NpdG9yeVN0b3JlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvc2l0b3J5IGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVJlcG9zaXRvcnkgQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8uUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG9zaXRvcnkgYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBSZXBvc2l0b3J5IFJlcG9zaXRvcnkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJyYW5jaCBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklCcmFuY2ggQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8uQnJhbmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJyYW5jaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBicmFuY2ggYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBCcmFuY2ggQnJhbmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQnJhbmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQnJhbmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWl0IGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUNvbW1pdCBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mby5Db21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tbWl0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1pdCBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvbW1pdCBDb21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb3NpdG9yeVN0b3JlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gbmV3IFJlcG9zaXRvcnkoKS5Db3B5RnJvbTxSZXBvc2l0b3J5PigoKENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvKSh2YWx1ZSkpLlJlcG9zaXRvcnkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQnJhbmNoID0gbmV3IEJyYW5jaCgpLkNvcHlGcm9tPEJyYW5jaD4oKChDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbykodmFsdWUpKS5CcmFuY2gpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0ID0gbmV3IENvbW1pdCgpLkNvcHlGcm9tPENvbW1pdD4oKChDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbykodmFsdWUpKS5Db21taXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIGRpcmVjdG9yeSBpbiBzb3VyY2UgY29udHJvbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdEZpbGVzRGlyZWN0b3J5IDogUmVwb0ZpbGVTY29wZUVudGl0eSwgQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+IG1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc0RpcmVjdG9yeShDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXRGaWxlc0RpcmVjdG9yeT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc0RpcmVjdG9yeShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlcyBpbiB0aGUgZGlyZWN0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb21taXRGaWxlTGluaz4gQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5LkZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGVzIGluIHRoZSBkaXJlY3RvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+IEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZXNEaXJlY3Rvcnkge1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4oKChDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkpKHZhbHVlKSkuRmlsZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvbW1pdEZpbGVMaW5rLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPikodiA9PiBuZXcgQ29tbWl0RmlsZUxpbmsoKS5Db3B5RnJvbTxDb21taXRGaWxlTGluaz4odikpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVwb0ZpbGVTY29wZUVudGl0eT4oKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIEJvdW5kU291cmNlRmlsZSBtX0JvdW5kU291cmNlRmlsZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklDbGFzc2lmaWNhdGlvbkxpc3QgbV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguSVJlZmVyZW5jZUxpc3QgbV9Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3RvcmVkQm91bmRTb3VyY2VGaWxlKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3RvcmVkQm91bmRTb3VyY2VGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklCb3VuZFNvdXJjZUZpbGUgQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZS5Cb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQm91bmRTb3VyY2VGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEJvdW5kU291cmNlRmlsZSBCb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Cb3VuZFNvdXJjZUZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Cb3VuZFNvdXJjZUZpbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBjbGFzc2lmaWNhdGlvbiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSUNsYXNzaWZpY2F0aW9uTGlzdCBDb21wcmVzc2VkQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiByZWZlcmVuY2Ugc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LklSZWZlcmVuY2VMaXN0IENvbXByZXNzZWRSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFN0b3JlZEJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Cb3VuZFNvdXJjZUZpbGUgPSBuZXcgQm91bmRTb3VyY2VGaWxlKCkuQ29weUZyb208Qm91bmRTb3VyY2VGaWxlPigoKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKHZhbHVlKSkuQm91bmRTb3VyY2VGaWxlKTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgPSAoKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKHZhbHVlKSkuQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRSZWZlcmVuY2VzID0gKChDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlKSh2YWx1ZSkpLkNvbXByZXNzZWRSZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIERlZmluaXRpb25TeW1ib2wgOiBSZWZlcmVuY2VTeW1ib2wsIENvZGV4LklEZWZpbml0aW9uU3ltYm9sIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1VpZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rpc3BsYXlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fU2hvcnROYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29udGFpbmVyUXVhbGlmaWVkTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZ1tdIG1fTW9kaWZpZXJzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguT2JqZWN0TW9kZWwuR2x5cGggbV9HbHlwaDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1N5bWJvbERlcHRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRG9jdW1lbnRhdGlvbkluZm8gbV9Eb2N1bWVudGF0aW9uSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1R5cGVOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblN5bWJvbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TeW1ib2woQ29kZXguSURlZmluaXRpb25TeW1ib2wgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxEZWZpbml0aW9uU3ltYm9sPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3ltYm9sKENvZGV4LklSZWZlcmVuY2VTeW1ib2wgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3ltYm9sKENvZGV4LklDb2RlU3ltYm9sIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyBOT1RFOiBUaGlzIGlzIG5vdCBhcHBsaWNhYmxlIHRvIG1vc3Qgc3ltYm9scy4gT25seSBzZXQgZm9yIHN5bWJvbHNcclxuICAgICAgICAvLy8gd2hpY2ggYXJlIGFkZGVkIGluIGEgc2hhcmVkIGNvbnRleHQgYW5kIG5lZWQgdGhpcyBmb3IgZGVkdXBsaWNhdGlvbilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBVaWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9VaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9VaWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERpc3BsYXlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EaXNwbGF5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNob3J0IG5hbWUgb2YgdGhlIHN5bWJvbCAoaS5lLiBUYXNrKS5cclxuICAgICAgICAvLy8gVGhpcyBpcyB1c2VkIHRvIGZpbmQgdGhlIHN5bWJvbCB3aGVuIHNlYXJjaCB0ZXJtIGRvZXMgbm90IGNvbnRhaW4gJy4nXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgU2hvcnROYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvZXJjZVNob3J0TmFtZSh0aGlzLm1fU2hvcnROYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Nob3J0TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHF1YWxpZmllZCBuYW1lIG9mIHRoZSBzeW1ib2wgKGkuZS4gU3lzdGVtLlRocmVhZGluZy5UYXNrcy5UYXNrKS5cclxuICAgICAgICAvLy8gVGhpcyBpcyB1c2VkIHRvIGZpbmQgdGhlIHN5bWJvbCB3aGVuIHRoZSBzZWFyY2ggdGVybSBjb250YWlucyAnLidcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb250YWluZXJRdWFsaWZpZWROYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29udGFpbmVyUXVhbGlmaWVkTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbnRhaW5lclF1YWxpZmllZE5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE1vZGlmaWVycyBmb3IgdGhlIHN5bWJvbCBzdWNoIGFzIHB1YmxpY1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nW10gTW9kaWZpZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTW9kaWZpZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTW9kaWZpZXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZ2x5cGhcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4Lk9iamVjdE1vZGVsLkdseXBoIEdseXBoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fR2x5cGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9HbHlwaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlcHRoIG9mIHRoZSBzeW1ib2wgaW4gaXRzIHN5bWJvbGljIHRyZWVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTeW1ib2xEZXB0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N5bWJvbERlcHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3ltYm9sRGVwdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERvY3VtZW50YXRpb24gZm9yIHRoZSBzeW1ib2wgKGlmIGFueSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklEb2N1bWVudGF0aW9uSW5mbyBDb2RleC5JRGVmaW5pdGlvblN5bWJvbC5Eb2N1bWVudGF0aW9uSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Eb2N1bWVudGF0aW9uSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERvY3VtZW50YXRpb24gZm9yIHRoZSBzeW1ib2wgKGlmIGFueSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIERvY3VtZW50YXRpb25JbmZvIERvY3VtZW50YXRpb25JbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRG9jdW1lbnRhdGlvbkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Eb2N1bWVudGF0aW9uSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHR5cGUgZm9yIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gKGkuZS4gcmV0dXJuIHR5cGUgb2YgbWV0aG9kKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFR5cGVOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVHlwZU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UeXBlTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlY2xhcmF0aW9uIG5hbWUgZm9yIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZWNsYXJhdGlvbk5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWNsYXJhdGlvbk5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWNsYXJhdGlvbk5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb21tZW50IGFwcGxpZWQgdG8gdGhlIGRlZmluaXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb21tZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklEZWZpbml0aW9uU3ltYm9sIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRGVmaW5pdGlvblN5bWJvbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9VaWQgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLlVpZDtcclxuICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1Nob3J0TmFtZSA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuU2hvcnROYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29udGFpbmVyUXVhbGlmaWVkTmFtZSA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuQ29udGFpbmVyUXVhbGlmaWVkTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX01vZGlmaWVycyA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuTW9kaWZpZXJzO1xyXG4gICAgICAgICAgICB0aGlzLm1fR2x5cGggPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLkdseXBoO1xyXG4gICAgICAgICAgICB0aGlzLm1fU3ltYm9sRGVwdGggPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLlN5bWJvbERlcHRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fRG9jdW1lbnRhdGlvbkluZm8gPSBuZXcgRG9jdW1lbnRhdGlvbkluZm8oKS5Db3B5RnJvbTxEb2N1bWVudGF0aW9uSW5mbz4oKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5Eb2N1bWVudGF0aW9uSW5mbyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9UeXBlTmFtZSA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuVHlwZU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWNsYXJhdGlvbk5hbWUgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLkRlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLkNvbW1lbnQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVmZXJlbmNlU3ltYm9sPigoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVmZXJlbmNlU3ltYm9sIDogU3ltYm9sLCBDb2RleC5JUmVmZXJlbmNlU3ltYm9sIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlZmVyZW5jZUtpbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIG1fSXNJbXBsaWNpdGx5RGVjbGFyZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIG1fRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtX0V4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTeW1ib2woKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTeW1ib2woQ29kZXguSVJlZmVyZW5jZVN5bWJvbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVN5bWJvbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3ltYm9sKENvZGV4LklDb2RlU3ltYm9sIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBraW5kIG9mIHJlZmVyZW5jZS4gVGhpcyBpcyB1c2VkIHRvIGdyb3VwIHJlZmVyZW5jZXMuXHJcbiAgICAgICAgLy8vIChpLmUuIGZvciBDIyhha2EgLk5FVCkgTWV0aG9kT3ZlcnJpZGUsIEludGVyZmFjZU1lbWJlckltcGxlbWVudGF0aW9uLCBJbnRlcmZhY2VJbXBsZW1lbnRhdGlvbiwgZXRjLilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZWZlcmVuY2VLaW5kIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVmZXJlbmNlS2luZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZUtpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZGljYXRlcyB0aGUgY29ycmVzcG9uZGluZyBkZWZpbml0aW9uIGlzIGltcGxpY2l0bHkgZGVjbGFyZWQgYW5kIHRoZXJlZm9yZSB0aGlzIHNob3VsZCBub3QgYmVcclxuICAgICAgICAvLy8gdXNlZCBmb3IgZmluZCBhbGwgcmVmZXJlbmNlcyBzZWFyY2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgSXNJbXBsaWNpdGx5RGVjbGFyZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Jc0ltcGxpY2l0bHlEZWNsYXJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0lzSW1wbGljaXRseURlY2xhcmVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgaWYgdGhlIHN5bWJvbCBzaG91bGQgYmUgZXhjbHVkZWQgZnJvbSB0aGUgZGVmaW5pdGlvbi9maW5kIGFsbCByZWZlcmVuY2VzIHNlYXJjaCAoYnkgZGVmYXVsdCkuXHJcbiAgICAgICAgLy8vIFN5bWJvbCB3aWxsIG9ubHkgYmUgaW5jbHVkZWQgaWYga2luZCBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBFeGNsdWRlRnJvbURlZmF1bHRTZWFyY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZGljYXRlcyBpZiB0aGUgc3ltYm9sIHNob3VsZCBORVZFUiBiZSBpbmNsdWRlZCBpbiB0aGUgZGVmaW5pdGlvbi9maW5kIGFsbCByZWZlcmVuY2VzIHNlYXJjaC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRXhjbHVkZUZyb21TZWFyY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVmZXJlbmNlU3ltYm9sIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU3ltYm9sIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZUtpbmQgPSAoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkuUmVmZXJlbmNlS2luZDtcclxuICAgICAgICAgICAgdGhpcy5tX0lzSW1wbGljaXRseURlY2xhcmVkID0gKChDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpLklzSW1wbGljaXRseURlY2xhcmVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoID0gKChDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpLkV4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaDtcclxuICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoID0gKChDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpLkV4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFN5bWJvbD4oKChDb2RleC5JQ29kZVN5bWJvbCkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29kZVN5bWJvbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU3ltYm9sIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVTeW1ib2wge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sSWQgbV9JZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0tpbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbCgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sKENvZGV4LklDb2RlU3ltYm9sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTeW1ib2w+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBpbiB3aGljaCB0aGUgc3ltYm9sIGFwcGVhcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIGZvciB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xJZCBJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzeW1ib2wga2luZC4gKGkuZS4gaW50ZXJmYWNlLCBtZXRob2QsIGZpZWxkKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9LaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVTeW1ib2wgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTeW1ib2wge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JQ29kZVN5bWJvbCkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9JZCA9ICgoQ29kZXguSUNvZGVTeW1ib2wpKHZhbHVlKSkuSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9LaW5kID0gKChDb2RleC5JQ29kZVN5bWJvbCkodmFsdWUpKS5LaW5kO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTZWFyY2hSZXN1bHQgOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5LCBDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgVGV4dExpbmVTcGFuIG1fVGV4dFNwYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFJlc3VsdCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFJlc3VsdChDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTZWFyY2hSZXN1bHQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFJlc3VsdChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGV4dCBzcGFuIGZvciBhIHRleHQgcmVzdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JVGV4dExpbmVTcGFuIENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdC5UZXh0U3BhbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5UZXh0U3BhbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0ZXh0IHNwYW4gZm9yIGEgdGV4dCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRleHRMaW5lU3BhbiBUZXh0U3BhbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1RleHRTcGFuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVGV4dFNwYW4gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNlYXJjaFJlc3VsdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9UZXh0U3BhbiA9IG5ldyBUZXh0TGluZVNwYW4oKS5Db3B5RnJvbTxUZXh0TGluZVNwYW4+KCgoQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0KSh2YWx1ZSkpLlRleHRTcGFuKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5PigoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSUluZGV4KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBJbmRleCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LlNkay5TZWFyY2guSUluZGV4IHtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgSW5kZXgoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEluZGV4KENvZGV4LlNkay5TZWFyY2guSUluZGV4IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxJbmRleD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LlNkay5TZWFyY2guSUluZGV4IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogSW5kZXgge1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbm5hbWVzcGFjZSBDb2RleC5GcmFtZXdvcmsuVHlwZXMge1xyXG4gICAgdXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuICAgIHVzaW5nIENvbW1pdCA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdDtcclxuICAgIHVzaW5nIENvbW1pdENoYW5nZWRGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0Q2hhbmdlZEZpbGU7XHJcbiAgICB1c2luZyBDb21taXRGaWxlTGluayA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rO1xyXG4gICAgdXNpbmcgQnJhbmNoID0gQ29kZXguT2JqZWN0TW9kZWwuQnJhbmNoO1xyXG4gICAgdXNpbmcgQm91bmRTb3VyY2VGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VGaWxlO1xyXG4gICAgdXNpbmcgQm91bmRTb3VyY2VJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VJbmZvO1xyXG4gICAgdXNpbmcgU291cmNlQ29udHJvbEZpbGVJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvO1xyXG4gICAgdXNpbmcgU291cmNlRmlsZUluZm8gPSBDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbztcclxuICAgIHVzaW5nIEVuY29kaW5nRGVzY3JpcHRpb24gPSBDb2RleC5PYmplY3RNb2RlbC5FbmNvZGluZ0Rlc2NyaXB0aW9uO1xyXG4gICAgdXNpbmcgU291cmNlRmlsZSA9IENvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGU7XHJcbiAgICB1c2luZyBPdXRsaW5pbmdSZWdpb24gPSBDb2RleC5PYmplY3RNb2RlbC5PdXRsaW5pbmdSZWdpb247XHJcbiAgICB1c2luZyBEZWZpbml0aW9uU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TcGFuO1xyXG4gICAgdXNpbmcgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3BhbjtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuO1xyXG4gICAgdXNpbmcgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlclJlZmVyZW5jZVNwYW47XHJcbiAgICB1c2luZyBDbGFzc2lmaWNhdGlvblNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW47XHJcbiAgICB1c2luZyBTeW1ib2xTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3BhbjtcclxuICAgIHVzaW5nIFRleHRMaW5lU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhbjtcclxuICAgIHVzaW5nIExpbmVTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW47XHJcbiAgICB1c2luZyBTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuU3BhbjtcclxuICAgIHVzaW5nIENvZGVSZXZpZXcgPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3O1xyXG4gICAgdXNpbmcgQ29kZVJldmlld0l0ZXJhdGlvbiA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdJdGVyYXRpb247XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3ZXJJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld2VySW5mbztcclxuICAgIHVzaW5nIENvZGVSZXZpZXdGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0ZpbGU7XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3Q29tbWVudFRocmVhZCA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdDb21tZW50VGhyZWFkO1xyXG4gICAgdXNpbmcgQ29kZVJldmlld0NvbW1lbnQgPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudDtcclxuICAgIHVzaW5nIExhbmd1YWdlSW5mbyA9IENvZGV4Lk9iamVjdE1vZGVsLkxhbmd1YWdlSW5mbztcclxuICAgIHVzaW5nIENsYXNzaWZpY2F0aW9uU3R5bGUgPSBDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblN0eWxlO1xyXG4gICAgdXNpbmcgQW5hbHl6ZWRQcm9qZWN0ID0gQ29kZXguT2JqZWN0TW9kZWwuQW5hbHl6ZWRQcm9qZWN0O1xyXG4gICAgdXNpbmcgUmVmZXJlbmNlZFByb2plY3QgPSBDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdDtcclxuICAgIHVzaW5nIFByb2plY3RGaWxlTGluayA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlTGluaztcclxuICAgIHVzaW5nIERvY3VtZW50YXRpb25JbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvbkluZm87XHJcbiAgICB1c2luZyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uID0gQ29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbjtcclxuICAgIHVzaW5nIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiA9IENvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbjtcclxuICAgIHVzaW5nIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgPSBDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sO1xyXG4gICAgdXNpbmcgUHJvcGVydHlTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5U2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBQcm9wZXJ0eU1hcCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwO1xyXG4gICAgdXNpbmcgUmVwb3NpdG9yeSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnk7XHJcbiAgICB1c2luZyBSZXBvc2l0b3J5UmVmZXJlbmNlID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZTtcclxuICAgIHVzaW5nIFNlYXJjaEVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlNlYXJjaEVudGl0eTtcclxuICAgIHVzaW5nIFJlcG9TY29wZUVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9TY29wZUVudGl0eTtcclxuICAgIHVzaW5nIENvbW1pdFNjb3BlRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0U2NvcGVFbnRpdHk7XHJcbiAgICB1c2luZyBQcm9qZWN0U2NvcGVFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0U2NvcGVFbnRpdHk7XHJcbiAgICB1c2luZyBSZXBvRmlsZVNjb3BlRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb0ZpbGVTY29wZUVudGl0eTtcclxuICAgIHVzaW5nIFByb2plY3RGaWxlU2NvcGVFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZVNjb3BlRW50aXR5O1xyXG4gICAgdXNpbmcgUmVnaXN0ZXJlZEVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZ2lzdGVyZWRFbnRpdHk7XHJcbiAgICB1c2luZyBTdG9yZWRGaWx0ZXIgPSBDb2RleC5PYmplY3RNb2RlbC5TdG9yZWRGaWx0ZXI7XHJcbiAgICB1c2luZyBEZWZpbml0aW9uU2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBMYW5ndWFnZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBTb3VyY2VTZWFyY2hNb2RlbEJhc2UgPSBDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VTZWFyY2hNb2RlbEJhc2U7XHJcbiAgICB1c2luZyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFRleHRTb3VyY2VTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlRleHRTb3VyY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFJlcG9zaXRvcnlTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnlTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFByb2plY3RTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIENvbW1pdFNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0U2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBDb21taXRGaWxlc1NlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZXNTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIEZpbGVTdGF0aXN0aWNzID0gQ29kZXguT2JqZWN0TW9kZWwuRmlsZVN0YXRpc3RpY3M7XHJcbiAgICB1c2luZyBSZXBvc2l0b3J5U3RvcmVJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVN0b3JlSW5mbztcclxuICAgIHVzaW5nIENvbW1pdEZpbGVzRGlyZWN0b3J5ID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZXNEaXJlY3Rvcnk7XHJcbiAgICB1c2luZyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUgPSBDb2RleC5PYmplY3RNb2RlbC5TdG9yZWRCb3VuZFNvdXJjZUZpbGU7XHJcbiAgICB1c2luZyBEZWZpbml0aW9uU3ltYm9sID0gQ29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbDtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVN5bWJvbCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbDtcclxuICAgIHVzaW5nIFN5bWJvbCA9IENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbDtcclxuICAgIHVzaW5nIFNlYXJjaFJlc3VsdCA9IENvZGV4Lk9iamVjdE1vZGVsLlNlYXJjaFJlc3VsdDtcclxuICAgIHVzaW5nIEluZGV4ID0gQ29kZXguT2JqZWN0TW9kZWwuSW5kZXg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHVibGljIHBhcnRpYWwgaW50ZXJmYWNlIElTdG9yZSB7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIENvZGV4Lk9iamVjdE1vZGVsXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWZpbmVzIENvZGV4IGdseXBoc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBlbnVtIEdseXBoXHJcbiAgICB7XHJcbiAgICAgICAgVW5rbm93biA9IC0xLFxyXG4gICAgICAgIEFzc2VtYmx5LFxyXG5cclxuICAgICAgICBCYXNpY0ZpbGUsXHJcbiAgICAgICAgQmFzaWNQcm9qZWN0LFxyXG5cclxuICAgICAgICBDbGFzc1B1YmxpYyxcclxuICAgICAgICBDbGFzc1Byb3RlY3RlZCxcclxuICAgICAgICBDbGFzc1ByaXZhdGUsXHJcbiAgICAgICAgQ2xhc3NJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgQ1NoYXJwRmlsZSxcclxuICAgICAgICBDU2hhcnBQcm9qZWN0LFxyXG5cclxuICAgICAgICBDb25zdGFudFB1YmxpYyxcclxuICAgICAgICBDb25zdGFudFByb3RlY3RlZCxcclxuICAgICAgICBDb25zdGFudFByaXZhdGUsXHJcbiAgICAgICAgQ29uc3RhbnRJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgRGVsZWdhdGVQdWJsaWMsXHJcbiAgICAgICAgRGVsZWdhdGVQcm90ZWN0ZWQsXHJcbiAgICAgICAgRGVsZWdhdGVQcml2YXRlLFxyXG4gICAgICAgIERlbGVnYXRlSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEVudW1QdWJsaWMsXHJcbiAgICAgICAgRW51bVByb3RlY3RlZCxcclxuICAgICAgICBFbnVtUHJpdmF0ZSxcclxuICAgICAgICBFbnVtSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEVudW1NZW1iZXIsXHJcblxyXG4gICAgICAgIEVycm9yLFxyXG5cclxuICAgICAgICBFdmVudFB1YmxpYyxcclxuICAgICAgICBFdmVudFByb3RlY3RlZCxcclxuICAgICAgICBFdmVudFByaXZhdGUsXHJcbiAgICAgICAgRXZlbnRJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgRXh0ZW5zaW9uTWV0aG9kUHVibGljLFxyXG4gICAgICAgIEV4dGVuc2lvbk1ldGhvZFByb3RlY3RlZCxcclxuICAgICAgICBFeHRlbnNpb25NZXRob2RQcml2YXRlLFxyXG4gICAgICAgIEV4dGVuc2lvbk1ldGhvZEludGVybmFsLFxyXG5cclxuICAgICAgICBGaWVsZFB1YmxpYyxcclxuICAgICAgICBGaWVsZFByb3RlY3RlZCxcclxuICAgICAgICBGaWVsZFByaXZhdGUsXHJcbiAgICAgICAgRmllbGRJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgSW50ZXJmYWNlUHVibGljLFxyXG4gICAgICAgIEludGVyZmFjZVByb3RlY3RlZCxcclxuICAgICAgICBJbnRlcmZhY2VQcml2YXRlLFxyXG4gICAgICAgIEludGVyZmFjZUludGVybmFsLFxyXG5cclxuICAgICAgICBJbnRyaW5zaWMsXHJcblxyXG4gICAgICAgIEtleXdvcmQsXHJcblxyXG4gICAgICAgIExhYmVsLFxyXG5cclxuICAgICAgICBMb2NhbCxcclxuXHJcbiAgICAgICAgTmFtZXNwYWNlLFxyXG5cclxuICAgICAgICBNZXRob2RQdWJsaWMsXHJcbiAgICAgICAgTWV0aG9kUHJvdGVjdGVkLFxyXG4gICAgICAgIE1ldGhvZFByaXZhdGUsXHJcbiAgICAgICAgTWV0aG9kSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIE1vZHVsZVB1YmxpYyxcclxuICAgICAgICBNb2R1bGVQcm90ZWN0ZWQsXHJcbiAgICAgICAgTW9kdWxlUHJpdmF0ZSxcclxuICAgICAgICBNb2R1bGVJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgT3BlbkZvbGRlcixcclxuXHJcbiAgICAgICAgT3BlcmF0b3IsXHJcblxyXG4gICAgICAgIFBhcmFtZXRlcixcclxuXHJcbiAgICAgICAgUHJvcGVydHlQdWJsaWMsXHJcbiAgICAgICAgUHJvcGVydHlQcm90ZWN0ZWQsXHJcbiAgICAgICAgUHJvcGVydHlQcml2YXRlLFxyXG4gICAgICAgIFByb3BlcnR5SW50ZXJuYWwsXHJcblxyXG4gICAgICAgIFJhbmdlVmFyaWFibGUsXHJcblxyXG4gICAgICAgIFJlZmVyZW5jZSxcclxuXHJcbiAgICAgICAgU3RydWN0dXJlUHVibGljLFxyXG4gICAgICAgIFN0cnVjdHVyZVByb3RlY3RlZCxcclxuICAgICAgICBTdHJ1Y3R1cmVQcml2YXRlLFxyXG4gICAgICAgIFN0cnVjdHVyZUludGVybmFsLFxyXG5cclxuICAgICAgICBUeXBlUGFyYW1ldGVyLFxyXG5cclxuICAgICAgICBVcCxcclxuICAgICAgICBEb3duLFxyXG4gICAgICAgIExlZnQsXHJcbiAgICAgICAgUmlnaHQsXHJcbiAgICAgICAgRG90LFxyXG5cclxuICAgICAgICBTbmlwcGV0XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBHbHlwaFV0aWxpdGllc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdXNob3J0IEdldEdseXBoTnVtYmVyKHRoaXMgR2x5cGggZ2x5cGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2hvcnQgcmVzdWx0ID0gKHVzaG9ydCkoKHVzaG9ydClHZXRTdGFuZGFyZEdseXBoR3JvdXAoZ2x5cGgpICsgKHVzaG9ydClHZXRTdGFuZGFyZEdseXBoSXRlbShnbHlwaCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU3RhbmRhcmRHbHlwaEdyb3VwIEdldFN0YW5kYXJkR2x5cGhHcm91cChHbHlwaCBnbHlwaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZ2x5cGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQXNzZW1ibHk6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEFzc2VtYmx5O1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc1ByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwQ2xhc3M7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Db25zdGFudFB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNvbnN0YW50UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBDb25zdGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNTaGFycEZpbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaENTaGFycEZpbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBEZWxlZ2F0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1QdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRW51bTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1NZW1iZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRW51bU1lbWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXh0ZW5zaW9uTWV0aG9kUHVibGljOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhFeHRlbnNpb25NZXRob2Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FeHRlbnNpb25NZXRob2RQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEV4dGVuc2lvbk1ldGhvZFByb3RlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV4dGVuc2lvbk1ldGhvZFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEV4dGVuc2lvbk1ldGhvZFByaXZhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FeHRlbnNpb25NZXRob2RJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoRXh0ZW5zaW9uTWV0aG9kSW50ZXJuYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV2ZW50UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBFdmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEZpZWxkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEludGVyZmFjZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludHJpbnNpYzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBJbnRyaW5zaWM7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5LZXl3b3JkOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhLZXl3b3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTGFiZWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwSW50cmluc2ljO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTG9jYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5OYW1lc3BhY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwTmFtZXNwYWNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5NZXRob2RQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cE1ldGhvZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBNb2R1bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5PcGVuRm9sZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhPcGVuRm9sZGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguT3BlcmF0b3I6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwT3BlcmF0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5QYXJhbWV0ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlJhbmdlVmFyaWFibGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5SZWZlcmVuY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaFJlZmVyZW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlN0cnVjdHVyZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguU3RydWN0dXJlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBTdHJ1Y3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5UeXBlUGFyYW1ldGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cFR5cGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5VcDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRG93bjpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTGVmdDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRvdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoQXJyb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXJndW1lbnRFeGNlcHRpb24oXCJnbHlwaFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU3RhbmRhcmRHbHlwaEl0ZW0gR2V0U3RhbmRhcmRHbHlwaEl0ZW0oR2x5cGggaWNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaWNvbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc1Byb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5UHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhJdGVtLkdseXBoSXRlbVByb3RlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoSXRlbS5HbHlwaEl0ZW1Qcml2YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEl0ZW0uR2x5cGhJdGVtRnJpZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCBhbnkgb3ZlcmxheXNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEl0ZW0uR2x5cGhJdGVtUHVibGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIERlc2NyaWJlcyB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGdseXBocyB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgY29tcGxldGlvbiB0b29sIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBlbnVtIFN0YW5kYXJkR2x5cGhHcm91cFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjbGFzc2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwQ2xhc3MgPSAwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNvbnN0YW50cy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cENvbnN0YW50ID0gNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBkZWxlZ2F0ZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBEZWxlZ2F0ZSA9IDEyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGVudW1lcmF0aW9ucy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEVudW0gPSAxOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBlbnVtZXJhdGlvbiBtZW1iZXJzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRW51bU1lbWJlciA9IDI0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGV2ZW50cy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEV2ZW50ID0gMzAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZXhjZXB0aW9ucy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEV4Y2VwdGlvbiA9IDM2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGZpZWxkcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEZpZWxkID0gNDIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgaW50ZXJmYWNlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEludGVyZmFjZSA9IDQ4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG1hY3Jvcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1hY3JvID0gNTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbWFwcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1hcCA9IDYwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG1hcCBpdGVtcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1hcEl0ZW0gPSA2NixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTWV0aG9kID0gNzIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igb3ZlcmxvYWRzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwT3ZlcmxvYWQgPSA3OCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBtb2R1bGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTW9kdWxlID0gODQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbmFtZXNwYWNlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE5hbWVzcGFjZSA9IDkwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG9wZXJhdG9ycy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE9wZXJhdG9yID0gOTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFByb3BlcnR5ID0gMTAyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHN0cnVjdHVyZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBTdHJ1Y3QgPSAxMDgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdGVtcGxhdGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVGVtcGxhdGUgPSAxMTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdHlwZWRlZnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBUeXBlZGVmID0gMTIwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHR5cGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVHlwZSA9IDEyNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB1bmlvbnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBVbmlvbiA9IDEzMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB2YXJpYWJsZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBWYXJpYWJsZSA9IDEzOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB2YWx1ZSB0eXBlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFZhbHVlVHlwZSA9IDE0NCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBpbnRyaW5zaWMgc3ltYm9scy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEludHJpbnNpYyA9IDE1MCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSlNoYXJwTWV0aG9kID0gMTU2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGZpZWxkcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEpTaGFycEZpZWxkID0gMTYyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGNsYXNzZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBKU2hhcnBDbGFzcyA9IDE2OCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBuYW1lc3BhY2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSlNoYXJwTmFtZXNwYWNlID0gMTc0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGludGVyZmFjZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBKU2hhcnBJbnRlcmZhY2UgPSAxODAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZXJyb3JzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRXJyb3IgPSAxODYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQlNDIGZpbGVzLlxyXG4gICAgICAgICAgICBHbHlwaEJzY0ZpbGUgPSAxOTEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgYXNzZW1ibGllcy5cclxuICAgICAgICAgICAgR2x5cGhBc3NlbWJseSA9IDE5MixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBsaWJyYXJpZXMuXHJcbiAgICAgICAgICAgIEdseXBoTGlicmFyeSA9IDE5MyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBWQiBwcm9qZWN0cy5cclxuICAgICAgICAgICAgR2x5cGhWQlByb2plY3QgPSAxOTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQyMgcHJvamVjdHMuXHJcbiAgICAgICAgICAgIEdseXBoQ29vbFByb2plY3QgPSAxOTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQysrIHByb2plY3RzLlxyXG4gICAgICAgICAgICBHbHlwaENwcFByb2plY3QgPSAxOTksXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZGlhbG9nIGlkZW50aWZpZXJzLlxyXG4gICAgICAgICAgICBHbHlwaERpYWxvZ0lkID0gMjAwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG9wZW4gZm9sZGVycy5cclxuICAgICAgICAgICAgR2x5cGhPcGVuRm9sZGVyID0gMjAxLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNsb3NlZCBmb2xkZXJzLlxyXG4gICAgICAgICAgICBHbHlwaENsb3NlZEZvbGRlciA9IDIwMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhcnJvdyBzeW1ib2xzLlxyXG4gICAgICAgICAgICBHbHlwaEFycm93ID0gMjAzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEMjIGZpbGVzLlxyXG4gICAgICAgICAgICBHbHlwaENTaGFycEZpbGUgPSAyMDQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQyMgZXhwYW5zaW9ucy5cclxuICAgICAgICAgICAgR2x5cGhDU2hhcnBFeHBhbnNpb24gPSAyMDUsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Iga2V5d29yZHMuXHJcbiAgICAgICAgICAgIEdseXBoS2V5d29yZCA9IDIwNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgICAgR2x5cGhJbmZvcm1hdGlvbiA9IDIwNyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciByZWZlcmVuY2VzLlxyXG4gICAgICAgICAgICBHbHlwaFJlZmVyZW5jZSA9IDIwOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciByZWN1cnNpb24uXHJcbiAgICAgICAgICAgIEdseXBoUmVjdXJzaW9uID0gMjA5LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIFhNTCBpdGVtcy5cclxuICAgICAgICAgICAgR2x5cGhYbWxJdGVtID0gMjEwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIHByb2plY3RzLlxyXG4gICAgICAgICAgICBHbHlwaEpTaGFycFByb2plY3QgPSAyMTEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgSiMgZG9jdW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaEpTaGFycERvY3VtZW50ID0gMjEyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGZvcndhcmRlZCB0eXBlcy5cclxuICAgICAgICAgICAgR2x5cGhGb3J3YXJkVHlwZSA9IDIxMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjYWxsZXJzIGdyYXBocy5cclxuICAgICAgICAgICAgR2x5cGhDYWxsZXJzR3JhcGggPSAyMTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY2FsbCBncmFwaHMuXHJcbiAgICAgICAgICAgIEdseXBoQ2FsbEdyYXBoID0gMjE1LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGJ1aWxkIHdhcm5pbmdzLlxyXG4gICAgICAgICAgICBHbHlwaFdhcm5pbmcgPSAyMTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igc29tZXRoaW5nIHRoYXQgbWF5IGJlIGEgcmVmZXJlbmNlLlxyXG4gICAgICAgICAgICBHbHlwaE1heWJlUmVmZXJlbmNlID0gMjE3LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHNvbWV0aGluZyB0aGF0IG1heSBiZSBhIGNhbGxlci5cclxuICAgICAgICAgICAgR2x5cGhNYXliZUNhbGxlciA9IDIxOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBzb21ldGhpbmcgdGhhdCBtYXkgYmUgYSBjYWxsLlxyXG4gICAgICAgICAgICBHbHlwaE1heWJlQ2FsbCA9IDIxOSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBleHRlbnNpb24gbWV0aG9kcy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2QgPSAyMjAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgaW50ZXJuYWwgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kSW50ZXJuYWwgPSAyMjEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZnJpZW5kIGV4dGVuc2lvbiBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEV4dGVuc2lvbk1ldGhvZEZyaWVuZCA9IDIyMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBwcm90ZWN0ZWQgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kUHJvdGVjdGVkID0gMjIzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHByaXZhdGUgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kUHJpdmF0ZSA9IDIyNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBleHRlbnNpb24gbWV0aG9kIHNob3J0Y3V0cy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2RTaG9ydGN1dCA9IDIyNSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBYTUwgYXR0cmlidXRlcy5cclxuICAgICAgICAgICAgR2x5cGhYbWxBdHRyaWJ1dGUgPSAyMjYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY2hpbGQgWE1MIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbENoaWxkID0gMjI3LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGRlc2NlbmRhbnQgWE1MIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbERlc2NlbmRhbnQgPSAyMjgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgWE1MIG5hbWVzcGFjZXMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sTmFtZXNwYWNlID0gMjI5LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIHF1ZXN0aW9uIG1hcmsgZm9yIFhNTCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbEF0dHJpYnV0ZVF1ZXN0aW9uID0gMjMwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIGNoZWNrIG1hcmsgZm9yIFhNTCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbEF0dHJpYnV0ZUNoZWNrID0gMjMxLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIHF1ZXN0aW9uIG1hcmsgZm9yIFhNTCBjaGlsZCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxDaGlsZFF1ZXN0aW9uID0gMjMyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIGNoZWNrIG1hcmsgZm9yIFhNTCBjaGlsZCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxDaGlsZENoZWNrID0gMjMzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIHF1ZXN0aW9uIG1hcmsgZm9yIFhNTCBkZXNjZW5kYW50IGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbERlc2NlbmRhbnRRdWVzdGlvbiA9IDIzNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIHdpdGggYSBjaGVjayBtYXJrIGZvciBYTUwgZGVzY2VuZGFudCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxEZXNjZW5kYW50Q2hlY2sgPSAyMzUsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY29tcGxldGlvbiB3YXJuaW5nc1xyXG4gICAgICAgICAgICBHbHlwaENvbXBsZXRpb25XYXJuaW5nID0gMjM2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHVua25vd24gdHlwZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBVbmtub3duID0gMjM3XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIERlc2NyaWJlcyBpY29ucyBvciBnbHlwaHMgdGhhdCBhcmUgdXNlZCBpbiBzdGF0ZW1lbnQgY29tcGxldGlvbi5cclxuICAgICAgICBwdWJsaWMgZW51bSBTdGFuZGFyZEdseXBoSXRlbVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHB1YmxpYyBzeW1ib2wuXHJcbiAgICAgICAgICAgIEdseXBoSXRlbVB1YmxpYyA9IDAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYW4gaW50ZXJuYWwgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1JbnRlcm5hbCA9IDEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYSBmcmllbmQgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1GcmllbmQgPSAyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgcHJvdGVjdGVkIHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtUHJvdGVjdGVkID0gMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHByaXZhdGUgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1Qcml2YXRlID0gNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHNob3J0Y3V0IHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtU2hvcnRjdXQgPSA1LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgc3ltYm9sIHRoYXQgaGFzIGFsbCAob3Igbm9uZSkgb2YgdGhlIHN0YW5kYXJkIGF0dHJpYnV0ZXMuXHJcbiAgICAgICAgICAgIFRvdGFsR2x5cGhJdGVtcyA9IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ29kZXguVXRpbGl0aWVzO1xyXG51c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguT2JqZWN0TW9kZWxcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgc3RydWN0IFN5bWJvbElkIDogSUVxdWF0YWJsZTxTeW1ib2xJZD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgc3RyaW5nIFZhbHVlO1xyXG5cclxuICAgICAgICBwcml2YXRlIFN5bWJvbElkKHN0cmluZyB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFN5bWJvbElkIFVuc2FmZUNyZWF0ZVdpdGhWYWx1ZShzdHJpbmcgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN5bWJvbElkKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIEVxdWFscyhTeW1ib2xJZCBvdGhlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZSA9PSBvdGhlci5WYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguU2RrLlNlYXJjaFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBpbnRlcmZhY2UgSUluZGV4XHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBIaWdoIGxldmVsIHF1ZXJ5IG9wZXJhdGlvbnMgZm9yIGluZGV4ZWQgY29kZVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBwYXJ0aWFsIGNsYXNzIEluZGV4PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4UXVlcnk8VD4gQ3JlYXRlUXVlcnkoKTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IElQcmVmaXhQcm9wZXJ0eTxUPiBDcmVhdGVQcmVmaXhQcm9wZXJ0eSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSVRlcm1Qcm9wZXJ0eTxUPiBDcmVhdGVUZXJtUHJvcGVydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgSW5kZXhRdWVyeTxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJbmRleEZpbHRlcjxUPiBGaWx0ZXIgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVyblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIGludCBNYXhSZXN1bHRzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxUPj4gRXhlY3V0ZUFzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFByZWZpeEZ1bGxOYW1lSW5kZXhQcm9wZXJ0eTxUPiA6IFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4RmlsdGVyPFQ+IFByZWZpeEZ1bGxOYW1lKHN0cmluZyBwcmVmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBQcmVmaXhJbmRleFByb3BlcnR5PFQ+IDogVGVybUluZGV4UHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhGaWx0ZXI8VD4gUHJlZml4KHN0cmluZyBwcmVmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBOb3JtYWxpemVkS2V5d29yZEluZGV4UHJvcGVydHk8VD4gOiBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBGdWxsVGV4dEluZGV4UHJvcGVydHk8VD4gOiBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJbmRleEZpbHRlcjxUPiBDb250YWlucyhzdHJpbmcgcGhyYXNlKTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4RmlsdGVyPFQ+IENvbnRhaW5zQWxsKHN0cmluZ1tdIHRlcm1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBTb3J0d29yZCBpcyBub3JtYWxseSBhbHNvIGEgbm9ybWFsaXplZCBrZXl3b3JkLiBJcyB0aGlzIGFsd2F5cyB0aGUgY2FzZT9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBTb3J0d29yZEluZGV4UHJvcGVydHk8VD4gOiBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgVGVybUluZGV4UHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhGaWx0ZXI8VD4gTWF0Y2g8VFZhbHVlPihUVmFsdWUgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVByZWZpeFByb3BlcnR5PFQ+IDogSVRlcm1Qcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIEluZGV4RmlsdGVyPFQ+IFByZWZpeChzdHJpbmcgcHJlZml4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElUZXJtUHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBJbmRleEZpbHRlcjxUPiBNYXRjaDxUVmFsdWU+KFRWYWx1ZSB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudW0gQmluYXJ5T3BlcmF0b3JcclxuICAgIHtcclxuICAgICAgICBBbmQsXHJcbiAgICAgICAgT3IsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEJpbmFyeUZpbHRlcjxUPiA6IEluZGV4RmlsdGVyPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IEJpbmFyeU9wZXJhdG9yIE9wZXJhdG9yO1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBJbmRleEZpbHRlcjxUPiBMZWZ0O1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBJbmRleEZpbHRlcjxUPiBSaWdodDtcclxuXHJcbiAgICAgICAgcHVibGljIEJpbmFyeUZpbHRlcihCaW5hcnlPcGVyYXRvciBvcCwgSW5kZXhGaWx0ZXI8VD4gbGVmdCwgSW5kZXhGaWx0ZXI8VD4gcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVyYXRvciA9IG9wO1xyXG4gICAgICAgICAgICBMZWZ0ID0gbGVmdDtcclxuICAgICAgICAgICAgUmlnaHQgPSByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEluZGV4RmlsdGVyPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJbmRleEZpbHRlcjxUPiBvcGVyYXRvciAmKEluZGV4RmlsdGVyPFQ+IGxlZnQsIEluZGV4RmlsdGVyPFQ+IHJpZ2h0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaW5hcnlGaWx0ZXI8VD4oQmluYXJ5T3BlcmF0b3IuQW5kLCBsZWZ0LCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEluZGV4RmlsdGVyPFQ+IG9wZXJhdG9yIHwoSW5kZXhGaWx0ZXI8VD4gbGVmdCwgSW5kZXhGaWx0ZXI8VD4gcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpbmFyeUZpbHRlcjxUPihCaW5hcnlPcGVyYXRvci5PciwgbGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElJbmRleFF1ZXJ5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgSUluZGV4UXVlcnlGaWx0ZXI8VD4gRmlsdGVyIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyB0byByZXR1cm5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGludCBNYXhSZXN1bHRzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5UmVzcG9uc2U8VD4+IEV4ZWN1dGVBc3luYygpO1xyXG5cclxuICAgICAgICB2b2lkIEV4Y2x1ZGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJSW5kZXhRdWVyeUZpbHRlcjxUPlxyXG4gICAge1xyXG4gICAgICAgIHZvaWQgRXhjbHVkZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5TZGsuU2VhcmNoXHJcbntcclxuICAgIC8vICtUT0RPOiBHZW5lcmF0ZSBBU1AuTmV0IGVuZHBvaW50IHdoaWNoIGhhbmRsZXMgYWxsIHRoZXNlIGNhbGxzLiBQb3RlbnRpYWxseSBhbHNvIGltcGxlbWVudFxyXG4gICAgLy8gY2FsbGVyIChpLmUuIFdlYkFwaUNvZGV4IDogSUNvZGV4KVxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEhpZ2ggbGV2ZWwgb3BlcmF0aW9ucyBmb3IgY29kZXggXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludGVyZmFjZSBJQ29kZXhcclxuICAgIHtcclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVNlYXJjaFJlc3VsdD4+IFNlYXJjaEFzeW5jKFNlYXJjaEFyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVJlZmVyZW5jZVNlYXJjaE1vZGVsPj4gRmluZEFsbFJlZmVyZW5jZXNBc3luYyhGaW5kQWxsUmVmZXJlbmNlc0FyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEZpbmQgZGVmaW5pdGlvbiBmb3IgYSBzeW1ib2xcclxuICAgICAgICAvLy8gVXNhZ2U6IERvY3VtZW50YXRpb24gaG92ZXIgdG9vbHRpcFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElEZWZpbml0aW9uU2VhcmNoTW9kZWw+PiBGaW5kRGVmaW5pdGlvbkFzeW5jKEZpbmREZWZpbml0aW9uQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRmluZCBkZWZpbml0aW9uIGxvY2F0aW9uIGZvciBhIHN5bWJvbFxyXG4gICAgICAgIC8vLyBVc2FnZTogR28gVG8gRGVmaW5pdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElSZWZlcmVuY2VTZWFyY2hNb2RlbD4+IEZpbmREZWZpbml0aW9uTG9jYXRpb25Bc3luYyhGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIFRhc2s8SW5kZXhRdWVyeVJlc3BvbnNlPElCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPj4gR2V0U291cmNlQXN5bmMoR2V0U291cmNlQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudW0gQ29kZXhTZXJ2aWNlTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgU2VhcmNoLFxyXG4gICAgICAgIEZpbmRBbGxSZWZzLFxyXG4gICAgICAgIEZpbmREZWYsXHJcbiAgICAgICAgRmluZERlZkxvY2F0aW9uLFxyXG4gICAgICAgIEdldFNvdXJjZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDb2RleEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVyblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIGludCBNYXhSZXN1bHRzID0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDb250ZXh0Q29kZXhBcmd1bWVudHNCYXNlIDogQ29kZXhBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWQgb2YgdGhlIHJlcG9zaXRvcnkgcmVmZXJlbmNpbmcgdGhlIHN5bWJvbC5cclxuICAgICAgICAvLy8gTk9URTogVGhpcyBpcyB1c2VkIHRvIHByaW9yaXR5IGludGVyLXJlcG9zaXRvcnkgbWF0Y2hlcyBvdmVyXHJcbiAgICAgICAgLy8vIG1hdGNoZXMgZnJvbSBvdXRzaWRlIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFJlZmVyZW5jaW5nUmVwb3NpdG9yeUlkO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZCBvZiB0aGUgcHJvamVjdCByZWZlcmVuY2luZyB0aGUgc3ltYm9sLlxyXG4gICAgICAgIC8vLyBOT1RFOiBUaGlzIGlzIHVzZWQgdG8gcHJpb3JpdHkgaW50ZXItcmVwb3NpdG9yeSBtYXRjaGVzIG92ZXJcclxuICAgICAgICAvLy8gbWF0Y2hlcyBmcm9tIG91dHNpZGUgdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUmVmZXJlbmNpbmdQcm9qZWN0SWQ7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkIG9mIHRoZSBmaWxlIHJlZmVyZW5jaW5nIHRoZSBzeW1ib2wuXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgaXMgdXNlZCB0byBwcmlvcml0eSBpbnRlci1yZXBvc2l0b3J5IG1hdGNoZXMgb3ZlclxyXG4gICAgICAgIC8vLyBtYXRjaGVzIGZyb20gb3V0c2lkZSB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBSZWZlcmVuY2luZ0ZpbGVJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2UgOiBDb250ZXh0Q29kZXhBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3ltYm9sIGlkIG9mIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3ltYm9sSWQ7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3QgaWQgb2YgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQcm9qZWN0SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbmREZWZpbml0aW9uQXJndW1lbnRzIDogRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbmRBbGxSZWZlcmVuY2VzQXJndW1lbnRzIDogRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmluZERlZmluaXRpb25Mb2NhdGlvbkFyZ3VtZW50cyA6IEZpbmRTeW1ib2xBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFNlYXJjaEFyZ3VtZW50cyA6IENvbnRleHRDb2RleEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNlYXJjaFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgR2V0U291cmNlQXJndW1lbnRzIDogQ29udGV4dENvZGV4QXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElTZWFyY2hSZXN1bHQgOiBJUHJvamVjdEZpbGVTY29wZUVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRleHQgc3BhbiBmb3IgYSB0ZXh0IHJlc3VsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSVRleHRMaW5lU3BhbiBUZXh0U3BhbiB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RydWN0IFNlcmlhbGl6YWJsZVRpbWVTcGFuXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGxvbmcgVGlja3MgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VyaWFsaXphYmxlVGltZVNwYW4oVGltZVNwYW4gdGltZXNwYW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUaWNrcyA9IHRpbWVzcGFuLlRpY2tzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRpbWVTcGFuIEFzVGltZVNwYW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFRpbWVTcGFuLkZyb21UaWNrcyhUaWNrcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGltcGxpY2l0IG9wZXJhdG9yIFRpbWVTcGFuKFNlcmlhbGl6YWJsZVRpbWVTcGFuIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLkFzVGltZVNwYW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW1wbGljaXQgb3BlcmF0b3IgU2VyaWFsaXphYmxlVGltZVNwYW4oVGltZVNwYW4gdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlcmlhbGl6YWJsZVRpbWVTcGFuKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFzVGltZVNwYW4oKS5Ub1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhRdWVyeVJlc3BvbnNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJZiB0aGUgcXVlcnkgZmFpbGVkLCB0aGlzIHdpbGwgY29udGFpbiB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBFcnJvciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJhdyBxdWVyeSBzZW50IHRvIHRoZSBpbmRleCBzZXJ2ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBJUmVhZE9ubHlMaXN0PHN0cmluZz4gUmF3UXVlcmllcyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNwZW50IGV4ZWN1dGluZyB0aGUgcXVlcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBTZXJpYWxpemFibGVUaW1lU3BhbiBEdXJhdGlvbiB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNwZW50IGV4ZWN1dGluZyB0aGUgcXVlcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBTZXJpYWxpemFibGVUaW1lU3BhbiBTZXJ2ZXJUaW1lIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIkVycm9yOiB7MH0sIER1cmF0aW9uOiB7MX1cIixFcnJvcixEdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBJbmRleFF1ZXJ5UmVzcG9uc2U8VD4gOiBJbmRleFF1ZXJ5UmVzcG9uc2VcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXN1bHRzIG9mIHRoZSBxdWVyeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIFQgUmVzdWx0IHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIlJlc3VsdDogezB9LCB7MX1cIixSZXN1bHQsYmFzZS5Ub1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEluZGV4UXVlcnlIaXRzPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdG90YWwgbnVtYmVyIG9mIHJlc3VsdHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LiBcclxuICAgICAgICAvLy8gTk9URTogVGhpcyBtYXkgYmUgZ3JlYXRlciB0aGFuIHRoZSBudW1iZXIgb2YgaGl0cyByZXR1cm5lZC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBpbnQgVG90YWwgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXN1bHRzIG9mIHRoZSBxdWVyeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIElSZWFkT25seUxpc3Q8VD4gSGl0cyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJUb3RhbDogezB9LCB7MX1cIixUb3RhbCxiYXNlLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxUPiA6IEluZGV4UXVlcnlSZXNwb25zZTxJbmRleFF1ZXJ5SGl0czxUPj5cclxuICAgIHtcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLkxpbnEuRXhwcmVzc2lvbnM7XHJcbnVzaW5nIFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4XHJcbntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBTZWFyY2hUeXBlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBOYW1lIHsgZ2V0OyBwcm90ZWN0ZWQgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBJbmRleE5hbWUgeyBnZXQ7IHByb3RlY3RlZCBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IElkIHsgZ2V0OyBwcm90ZWN0ZWQgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZTxUPiBDcmVhdGU8VD4oTGlzdDxTZWFyY2hUeXBlPiByZWdpc3RlcmVkU2VhcmNoVHlwZXMsIFtDYWxsZXJNZW1iZXJOYW1lXXN0cmluZyBuYW1lID0gbnVsbClcclxuICAgICAgICAgICAgd2hlcmUgVCA6IGNsYXNzLCBJU2VhcmNoRW50aXR5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoVHlwZSA9IG5ldyBTZWFyY2hUeXBlPFQ+KG5hbWUpO1xyXG4gICAgICAgICAgICBzZWFyY2hUeXBlLklkID0gcmVnaXN0ZXJlZFNlYXJjaFR5cGVzLkNvdW50O1xyXG4gICAgICAgICAgICByZWdpc3RlcmVkU2VhcmNoVHlwZXMuQWRkKHNlYXJjaFR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBUeXBlIFR5cGUgeyBnZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gOiBTZWFyY2hUeXBlXHJcbiAgICAgICAgd2hlcmUgVFNlYXJjaFR5cGUgOiBjbGFzcywgSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBUeXBlIFR5cGUge2dldHtyZXR1cm4gdHlwZW9mKFRTZWFyY2hUeXBlKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxUdXBsZTxFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+LCBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+Pj4gQ29weVRvRmllbGRzID0gbmV3IExpc3Q8VHVwbGU8RXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiwgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+Pj4+KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBMaXN0PFR1cGxlPEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4sIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4+PiBJbmhlcml0RmllbGRzID0gbmV3IExpc3Q8VHVwbGU8RXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiwgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+Pj4+KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hUeXBlKHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIEluZGV4TmFtZSA9IE5hbWUuVG9Mb3dlckludmFyaWFudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFR5cGU8VFNlYXJjaFR5cGU+IEluaGVyaXQ8VD4oXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgVD4+IHByb3ZpZGVyRmllbGQsXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgVD4+IHNlYXJjaEZpZWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gQ29weVRvKFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+IHNvdXJjZUZpZWxkLFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+IHRhcmdldEZpZWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gRXhjbHVkZShcclxuICAgICAgICAgICAgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiBzZWFyY2hGaWVsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFR5cGU8VFNlYXJjaFR5cGU+IFNlYXJjaEFzPFQ+KFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIFQ+PiBzZWFyY2hGaWVsZCxcclxuICAgICAgICAgICAgU2VhcmNoQmVoYXZpb3IgYmVoYXZpb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uTGlucS5FeHByZXNzaW9ucztcclxudXNpbmcgU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgLypcclxuICAgICAqIFR5cGVzIGluIHRoaXMgZmlsZSBkZWZpbmUgc2VhcmNoIGJlaGF2aW9ycy4gQ2hhbmdlcyBzaG91bGQgYmUgbWFkZSB3aXRoIGNhdXRpb24gYXMgdGhleSBjYW4gYWZmZWN0XHJcbiAgICAgKiB0aGUgbWFwcGluZyBzY2hlbWEgZm9yIGluZGljZXMgYW5kIHdpbGwgZ2VuZXJhbGx5IG5lZWQgdG8gYmUgYmFja3dhcmQgY29tcGF0aWJsZS5cclxuICAgICAqIEFkZGl0aW9ucyBzaG91bGQgYmUgZ2VuZXJhbGx5IHNhZmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGFzcyBTZWFyY2hUeXBlc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTGlzdDxTZWFyY2hUeXBlPiBSZWdpc3RlcmVkU2VhcmNoVHlwZXMgPSBuZXcgTGlzdDxTZWFyY2hUeXBlPigpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgRGVmaW5pdGlvbiA9IFNlYXJjaFR5cGUuQ3JlYXRlPElEZWZpbml0aW9uU2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcbiAgICAgICAgLy8uQ29weVRvKGRzID0+IGRzLkRlZmluaXRpb24uTW9kaWZpZXJzLCBkcyA9PiBkcy5LZXl3b3JkcylcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5LaW5kLCBkcyA9PiBkcy5LaW5kKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLkV4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaCwgZHMgPT4gZHMuRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLktpbmQsIGRzID0+IGRzLktleXdvcmRzKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLlNob3J0TmFtZSwgZHMgPT4gZHMuU2hvcnROYW1lKVxyXG4gICAgICAgIC8vLy8uQ29weVRvKGRzID0+IGRzLkxhbmd1YWdlLCBkcyA9PiBkcy5LZXl3b3JkcylcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5Qcm9qZWN0SWQsIGRzID0+IGRzLlByb2plY3RJZClcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5Qcm9qZWN0SWQsIGRzID0+IGRzLktleXdvcmRzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFJlZmVyZW5jZSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElSZWZlcmVuY2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuICAgICAgICAvLy5Db3B5VG8ocnMgPT4gcnMuU3BhbnMuRmlyc3QoKS5SZWZlcmVuY2UsIHJzID0+IHJzLlJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBUZXh0U291cmNlID0gU2VhcmNoVHlwZS5DcmVhdGU8SVRleHRTb3VyY2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5Tb3VyY2VGaWxlLkNvbnRlbnQsIHNzID0+IHNzLkNvbnRlbnQpXHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuU291cmNlRmlsZS5JbmZvLlJlcG9SZWxhdGl2ZVBhdGgsIHNzID0+IHNzLlJlcG9SZWxhdGl2ZVBhdGgpXHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuUHJvamVjdElkLCBzcyA9PiBzcy5Qcm9qZWN0SWQpXHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuSW5mby5QYXRoLCBzcyA9PiBzcy5GaWxlUGF0aCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBCb3VuZFNvdXJjZSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG4gICAgICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5Tb3VyY2VGaWxlLkNvbnRlbnQsIHNzID0+IHNzLkNvbnRlbnQpXHJcbiAgICAgICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlLlNvdXJjZUZpbGUuSW5mby5SZXBvUmVsYXRpdmVQYXRoLCBzcyA9PiBzcy5SZXBvUmVsYXRpdmVQYXRoKVxyXG4gICAgICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuQmluZGluZ0luZm8uUHJvamVjdElkLCBzcyA9PiBzcy5Qcm9qZWN0SWQpXHJcbiAgICAgICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlUGF0aCwgc3MgPT4gc3MuRmlsZVBhdGgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgTGFuZ3VhZ2UgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJTGFuZ3VhZ2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFJlcG9zaXRvcnkgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUmVwb3NpdG9yeVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUHJvamVjdCA9IFNlYXJjaFR5cGUuQ3JlYXRlPElQcm9qZWN0U2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcylcclxuICAgICAgICAgICAgLkV4Y2x1ZGUoc20gPT4gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5GaXJzdDxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VkUHJvamVjdD4oc20uUHJvamVjdC5Qcm9qZWN0UmVmZXJlbmNlcykuRGVmaW5pdGlvbnMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgQ29tbWl0ID0gU2VhcmNoVHlwZS5DcmVhdGU8SUNvbW1pdFNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgQ29tbWl0RmlsZXMgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJQ29tbWl0RmlsZXNTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFByb2plY3RSZWZlcmVuY2UgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUHJvcGVydHkgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUHJvcGVydHlTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFN0b3JlZEZpbHRlciA9IFNlYXJjaFR5cGUuQ3JlYXRlPElTdG9yZWRGaWx0ZXI+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBSZWdpc3RlcmVkRW50aXR5ID0gU2VhcmNoVHlwZS5DcmVhdGU8SVJlZ2lzdGVyZWRFbnRpdHk+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluIG9yZGVyIHRvIGNvbXB1dGUgYSBzdGFibGUgaW50ZWdyYWwgaWQgZm9yIGVhY2ggZW50aXR5LiBUaGlzIHR5cGUgaXMgdXNlZCB0byBzdG9yZSBpbnRvIGEgJ2ZvbGxvdycgaW5kZXggd2hpY2hcclxuICAgIC8vLyBzdG9yZXMgZW50aXRpZXMgb2YgdGhpcyB0eXBlIHVzaW5nIHRoZSA8c2VlIGNyZWY9XCJJU2VhcmNoRW50aXR5LlVpZFwiLz4gb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VhcmNoIGVudGl0eS4gVGhlbiB0aGVcclxuICAgIC8vLyBzZXF1ZW5jZSBudW1iZXIgYXNzaWduZWQgYnkgRWxhc3RpY1NlYXJjaCBpcyB1c2VkIGFzIHRoZSBzaGFyZCBzdGFibGUgaWQgKDxzZWUgY3JlZj1cIklTZWFyY2hFbnRpdHkuU2hhcmRTdGFibGVJZFwiLz4pXHJcbiAgICAvLy8gZm9yIHRoZSBlbnRpdHkuIFRoaXMgYXBwcm9hY2ggaXMgdXNlZCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc3RhYmxlIGlkIGFwcGVhcnMgYXMgYW4gZXhwbGljaXQgZmllbGQgaW4gdGhlIGRvY3VtZW50IHJhdGhlclxyXG4gICAgLy8vIHdoaWNoIGFsbG93cyBjb25maWd1cmF0aW9uIG9mIGhvdyB0aGUgZmllbGQgaXMgaW5kZXhlZCAobm90IHRydWUgZm9yIHNlcXVlbmNlIG51bWJlciBmaWVsZCB3aXRob3V0IGNvZGUgY2hhbmdlcyB0byBFUykuXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUmVnaXN0ZXJlZEVudGl0eSA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkYXRlIGluIHdoaWNoIHRoZSBlbnRpdHkgd2FzIHJlZ2lzdGVyZWQgKGkuZS4gYWRkZWQgdG8gdGhlIHN0b3JlKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgRGF0ZVRpbWUgRGF0ZUFkZGVkIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyBhIHN0b3JlZCBmaWx0ZXIgd2hpY2ggbWF0Y2hlcyBlbnRpdGllcyBpbiBhIHBhcnRpY3VsYXIgaW5kZXggc2hhcmQgaW4gYSBzdGFibGUgbWFubmVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludGVyZmFjZSBJU3RvcmVkRmlsdGVyIDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRpbWUgb2YgdGhlIGxhc3QgdXBkYXRlIHRvIHRoZSBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBEYXRlVGltZSBEYXRlVXBkYXRlZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGluZGV4IHRvIHdoaWNoIHRoZSBzdG9yZWQgZmlsdGVyIGFwcGxpZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHN0cmluZyBJbmRleE5hbWUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNoYXJkIHRvIHdoaWNoIHRoZSBzdG9yZWQgZmlsdGVyIGFwcGxpZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGludCBTaGFyZCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0YWJsZSBpZHMgdG8gaW5jbHVkZSBpbiB0aGUgc3RvcmVkIGZpbHRlci5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8bG9uZz4gU3RhYmxlSWRzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2YgdWlkcyB0byBmb3Igc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8c3RyaW5nPiBCYXNlVWlkcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJUmVhZE9ubHlMaXN0PGJ5dGVbXT4gVW5pb25GaWx0ZXJzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzdG9yZWQgZmlsdGVyIGJpdCBzZXQgd2hpY2ggbWF0Y2hlcyB0aGUgc3RvcmVkIGZpbHRlciBkb2N1bWVudHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGJ5dGVbXSBGaWx0ZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGhhc2ggb2YgPHNlZSBjcmVmPVwiRmlsdGVyXCIvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgc3RyaW5nIEZpbHRlckhhc2ggeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvdW50IG9mIGVsZW1lbnRzIG1hdGNoZWQgYnkgPHNlZSBjcmVmPVwiRmlsdGVyXCIvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgaW50IEZpbHRlckNvdW50IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSURlZmluaXRpb25TZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJRGVmaW5pdGlvblN5bWJvbCBEZWZpbml0aW9uIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBOb3Qgc3VyZSB0aGF0IHRoaXMgaXMgYWN0dWFsbHkgbmVlZGVkXHJcbiAgICAgICAgLy8vLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vLy8gS2V5d29yZHMgYXJlIGFkZGl0aW9uYWwgdGVybXMgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmluZCBhIGdpdmVuIHN5bWJvbC5cclxuICAgICAgICAvLy8vLyBOT1RFOiBLZXl3b3JkcyBjYW4gb25seSBiZSB1c2VkIHRvIHNlbGVjdCBmcm9tIHN5bWJvbHMgd2hpY2ggaGF2ZVxyXG4gICAgICAgIC8vLy8vIGEgcHJpbWFyeSB0ZXJtIG1hdGNoXHJcbiAgICAgICAgLy8vLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vcm1hbGl6ZWRLZXl3b3JkKV1cclxuICAgICAgICAvL0lSZWFkT25seUxpc3Q8c3RyaW5nPiBLZXl3b3JkcyB7IGdldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUxhbmd1YWdlU2VhcmNoTW9kZWwgOiBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSUxhbmd1YWdlSW5mbyBMYW5ndWFnZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElSZWZlcmVuY2VTZWFyY2hNb2RlbCA6IElQcm9qZWN0RmlsZVNjb3BlRW50aXR5LCBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSUNvZGVTeW1ib2wgUmVmZXJlbmNlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBOZWVkIHNvbWUgc29ydCBvZiBvdmVycmlkZSBmb3Igc2VhcmNoaW5nIFJlbGF0ZWREZWZpbml0aW9uIG9mIHRoZVxyXG4gICAgICAgIC8vIFJlZmVyZW5jZVNwYW5cclxuICAgICAgICBbU2VhcmNoQmVoYXZpb3IoU2VhcmNoQmVoYXZpb3IuTm9uZSldXHJcbiAgICAgICAgW1JlYWRPbmx5TGlzdF1cclxuICAgICAgICBbQ29lcmNlR2V0XVxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8SVN5bWJvbFNwYW4+IFNwYW5zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vbmUpXVxyXG4gICAgICAgIElTeW1ib2xMaW5lU3Bhbkxpc3QgQ29tcHJlc3NlZFNwYW5zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElTb3VyY2VDb250cm9sRmlsZUluZm8gU291cmNlQ29udHJvbEluZm8geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJQm91bmRTb3VyY2VTZWFyY2hNb2RlbCA6IElTb3VyY2VTZWFyY2hNb2RlbEJhc2VcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgYXNzb2NpYXRlZCA8c2VlIGNyZWY9XCJJU291cmNlRmlsZVwiLz5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHN0cmluZyBUZXh0VWlkIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSVNvdXJjZUZpbGVJbmZvIFNvdXJjZUluZm8geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJpbmRpbmcgaW5mb1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSUJvdW5kU291cmNlSW5mbyBCaW5kaW5nSW5mbyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21wcmVzc2VkIGxpc3Qgb2YgY2xhc3NpZmljYXRpb24gc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFtTZWFyY2hCZWhhdmlvcihTZWFyY2hCZWhhdmlvci5Ob25lKV1cclxuICAgICAgICBJQ2xhc3NpZmljYXRpb25MaXN0IENvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIHJlZmVyZW5jZSBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vbmUpXVxyXG4gICAgICAgIElSZWZlcmVuY2VMaXN0IENvbXByZXNzZWRSZWZlcmVuY2VzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVRleHRTb3VyY2VTZWFyY2hNb2RlbCA6IElTb3VyY2VTZWFyY2hNb2RlbEJhc2VcclxuICAgIHtcclxuICAgICAgICBJU291cmNlRmlsZSBGaWxlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVwb3NpdG9yeSBSZXBvc2l0b3J5IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVByb2plY3RTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUHJvamVjdCBQcm9qZWN0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCA6IElQcm9qZWN0U2NvcGVFbnRpdHksIElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVmZXJlbmNlZFByb2plY3QgUHJvamVjdFJlZmVyZW5jZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElDb21taXRTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJQ29tbWl0IENvbW1pdCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gVGhlIHNldCBvZiBmaWxlcyBwcmVzZW50IGluIHRoZSByZXBvc2l0b3J5IGF0IGEgZ2l2ZW4gY29tbWl0LlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwgOiBJQ29tbWl0U2NvcGVFbnRpdHksIElSZXBvU2NvcGVFbnRpdHksIElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVhZE9ubHlMaXN0PElDb21taXRGaWxlTGluaz4gQ29tbWl0RmlsZXMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgQ29kZXguT2JqZWN0TW9kZWw7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVXRpbGl0aWVzXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcGFydGlhbCBjbGFzcyBDb2xsZWN0aW9uVXRpbGl0aWVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNsYXNzIEVtcHR5PFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExpc3Q8VD4gTGlzdCA9IG5ldyBMaXN0PFQ+KDApO1xyXG5cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUW10gQXJyYXkgPSBuZXcgVFswXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlV0aWxpdGllc1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIFNlcmlhbGl6YXRpb25VdGlsaXRpZXNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFQgQXNzaWduRHVwbGljYXRlPFQ+KFQgdmFsdWUsIHJlZiBUIGxhc3RWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChFcXVhbGl0eUNvbXBhcmVyPFQ+LkRlZmF1bHQuRXF1YWxzKHZhbHVlLCBkZWZhdWx0KFQpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFQgUmVtb3ZlRHVwbGljYXRlPFQ+KFQgdmFsdWUsIHJlZiBUIGxhc3RWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChFcXVhbGl0eUNvbXBhcmVyPFQ+LkRlZmF1bHQuRXF1YWxzKHZhbHVlLCBkZWZhdWx0KFQpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHQoVCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDb2RleC5WaWV3LldlYjtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgcGFydGlhbCBjbGFzcyBBcHBcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQXBwKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgc2hvdWxkIGJlIGNvbmZpZ3VyYWJsZSB0aHJvdWdoIGJ1aWxkIHByb3BlcnRpZXMgc29tZWhvd1xyXG4gICAgICAgICAgICBDb2RleFByb3ZpZGVyLkluc3RhbmNlID0gbmV3IFdlYkFwaUNvZGV4KFwiaHR0cDovL2xvY2FsaG9zdDo5NDkxL2FwaS9jb2RleC9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENvZGV4LlNkay5TZWFyY2g7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkNvbnRyb2xzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5EYXRhO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Eb2N1bWVudHM7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLklucHV0O1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYTtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWEuSW1hZ2luZztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTmF2aWdhdGlvbjtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuU2hhcGVzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEludGVyYWN0aW9uIGxvZ2ljIGZvciBNYWluV2luZG93LnhhbWxcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBNYWluV2luZG93IDogV2luZG93XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIElDb2RleCBDb2RleFNlcnZpY2UgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBNYWluV2luZG93KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBCdXR0b25fQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEdyaWRfTG9hZGVkKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJHcmlkX0xvYWRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyB2b2lkIFNlYXJjaFRleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIFRleHRDaGFuZ2VkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaFN0cmluZyA9IFNlYXJjaEJveC5UZXh0O1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nLlRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoU3RyaW5nLkxlbmd0aCA8IDMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoSW5mby5UZXh0ID0gXCJFbnRlciBhdCBsZWFzdCAzIGNoYXJhY3RlcnMuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBDb2RleFNlcnZpY2UuU2VhcmNoQXN5bmMobmV3IFNlYXJjaEFyZ3VtZW50cygpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LkVycm9yICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoSW5mby5UZXh0ID0gcmVzdWx0LkVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChnbG9iYWw6OkJyaWRnZS5TY3JpcHQuVG9UZW1wKFwia2V5MVwiLHJlc3VsdC5SZXN1bHQpIT1udWxsP2dsb2JhbDo6QnJpZGdlLlNjcmlwdC5Gcm9tVGVtcDxJbmRleFF1ZXJ5SGl0czxJU2VhcmNoUmVzdWx0Pj4oXCJrZXkxXCIpLkhpdHM6KElSZWFkT25seUxpc3Q8SVNlYXJjaFJlc3VsdD4pbnVsbCkgPT0gbnVsbCB8fCByZXN1bHQuUmVzdWx0LkhpdHMuQ291bnQgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2hJbmZvLlRleHQgPSBcIk5vIHJlc3VsdHMgZm91bmQuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFNlYXJjaEluZm8uVGV4dCA9IHN0cmluZy5FbXB0eTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0NvbnNvbGUuV3JpdGVMaW5lKFwiU2VhcmNoIHJlc3VsdFwiKTtcclxuICAgICAgICAgICAgICAgIC8vQ29uc29sZS5Xcml0ZUxpbmUocmVzdWx0LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZy5Jc051bGxPckVtcHR5KFNlYXJjaEluZm8uVGV4dCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoUmVzdWx0c0NvbnRhaW5lci5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaEluZm8uVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaFJlc3VsdHNDb250YWluZXIuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaEluZm8uVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXG5cclxuICAgICAgICAvL3ByaXZhdGUgdm9pZCBCb3JkZXJfU2l6ZUNoYW5nZWQob2JqZWN0IHNlbmRlciwgU2l6ZUNoYW5nZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICAvL3tcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy9wcml2YXRlIHZvaWQgV2luZG93X0xvYWRlZChvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICAvL3tcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy9wcml2YXRlIHZvaWQgV2luZG93X0luaXRpYWxpemVkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICAvL3Byb3RlY3RlZCBvdmVycmlkZSBTaXplIEFycmFuZ2VPdmVycmlkZShTaXplIGFycmFuZ2VCb3VuZHMpXHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgLy8gICAgdmFyIHJlc3VsdCA9IGJhc2UuQXJyYW5nZU92ZXJyaWRlKGFycmFuZ2VCb3VuZHMpO1xyXG4gICAgICAgIC8vICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgLy99XHJcbiAgICBcbnByaXZhdGUgSUNvZGV4IF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19Db2RleFNlcnZpY2U9Q29kZXhQcm92aWRlci5JbnN0YW5jZTt9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuQ29udHJvbHM7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkRvY3VtZW50cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuSW5wdXQ7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYS5JbWFnaW5nO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5OYXZpZ2F0aW9uO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5TaGFwZXM7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW50ZXJhY3Rpb24gbG9naWMgZm9yIFNlYXJjaFJlc3VsdHMueGFtbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNlYXJjaFJlc3VsdHMgOiBVc2VyQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hSZXN1bHRzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIENvbXBhdGliaWxpdHlFeHRlbnNpb25zXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdHJpbmcgVG9Mb3dlckludmFyaWFudCh0aGlzIHN0cmluZyB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5Ub0xvd2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIENvZGV4XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBFbnRpdHlCYXNlIDogSVNlcmlhbGl6YWJsZUVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgSW5pdGlhbGl6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPblNlcmlhbGl6aW5nQ29yZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPbkRlc2VyaWFsaXplZENvcmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgSVNlcmlhbGl6YWJsZUVudGl0eS5PblNlcmlhbGl6aW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9uU2VyaWFsaXppbmdDb3JlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIElTZXJpYWxpemFibGVFbnRpdHkuT25EZXNlcmlhbGl6ZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT25EZXNlcmlhbGl6ZWRDb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVNlcmlhbGl6YWJsZUVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIHZvaWQgT25EZXNlcmlhbGl6ZWQoKTtcclxuXHJcbiAgICAgICAgdm9pZCBPblNlcmlhbGl6aW5nKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENvZGV4LlNkay5TZWFyY2g7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXcuU2hhcmVkXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBUZXh0UmVzdWx0Vmlld01vZGVsIDogRmlsZUl0ZW1SZXN1bHRWaWV3TW9kZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSVNlYXJjaFJlc3VsdCBTZWFyY2hSZXN1bHQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUZXh0UmVzdWx0Vmlld01vZGVsKElTZWFyY2hSZXN1bHQgcmVzdWx0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VhcmNoUmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvamVjdEl0ZW1SZXN1bHRWaWV3TW9kZWxcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbGVJdGVtUmVzdWx0Vmlld01vZGVsXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaWxlUmVzdWx0c1ZpZXdNb2RlbCA6IFByb2plY3RJdGVtUmVzdWx0Vmlld01vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQYXRoIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgTGlzdDxGaWxlSXRlbVJlc3VsdFZpZXdNb2RlbD4gSXRlbXMgeyBnZXQ7IHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUHJvamVjdE5hbWUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBMaXN0PFByb2plY3RJdGVtUmVzdWx0Vmlld01vZGVsPiBJdGVtcyB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBDb2RleC5TZGsuU2VhcmNoO1xyXG51c2luZyBOZXd0b25zb2Z0Lkpzb247XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3LldlYlxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgV2ViQXBpQ29kZXggOiBJQ29kZXhcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHN0cmluZyBiYXNlVXJsO1xyXG5cclxuICAgICAgICBwdWJsaWMgV2ViQXBpQ29kZXgoc3RyaW5nIGJhc2VVcmwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsLkVuZHNXaXRoKFwiL1wiKSA/IGJhc2VVcmwgOiBiYXNlVXJsICsgJy8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoTW9kZWw+PiBGaW5kQWxsUmVmZXJlbmNlc0FzeW5jKEZpbmRBbGxSZWZlcmVuY2VzQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLkZpbmRBbGxSZWZlcmVuY2VzQXJndW1lbnRzLGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsPj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmRBbGxSZWZzLCBhcmd1bWVudHMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JQ29kZXgsIGdsb2JhbDo6U3lzdGVtLlRocmVhZGluZy5UYXNrcy5UYXNrPGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsPj4+KShjID0+IGMuRmluZEFsbFJlZmVyZW5jZXNBc3luYyhhcmd1bWVudHMpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElEZWZpbml0aW9uU2VhcmNoTW9kZWw+PiBGaW5kRGVmaW5pdGlvbkFzeW5jKEZpbmREZWZpbml0aW9uQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLkZpbmREZWZpbml0aW9uQXJndW1lbnRzLGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbD4+KENvZGV4U2VydmljZU1ldGhvZC5GaW5kRGVmLCBhcmd1bWVudHMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JQ29kZXgsIGdsb2JhbDo6U3lzdGVtLlRocmVhZGluZy5UYXNrcy5UYXNrPGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbD4+PikoYyA9PiBjLkZpbmREZWZpbml0aW9uQXN5bmMoYXJndW1lbnRzKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoTW9kZWw+PiBGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXN5bmMoRmluZERlZmluaXRpb25Mb2NhdGlvbkFyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5GaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXJndW1lbnRzLGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsPj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmREZWZMb2NhdGlvbiwgYXJndW1lbnRzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSUNvZGV4LCBnbG9iYWw6OlN5c3RlbS5UaHJlYWRpbmcuVGFza3MuVGFzazxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbD4+PikoYyA9PiBjLkZpbmREZWZpbml0aW9uTG9jYXRpb25Bc3luYyhhcmd1bWVudHMpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGFzazxJbmRleFF1ZXJ5UmVzcG9uc2U8SUJvdW5kU291cmNlU2VhcmNoTW9kZWw+PiBHZXRTb3VyY2VBc3luYyhHZXRTb3VyY2VBcmd1bWVudHMgYXJndW1lbnRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBvc3RBc3luYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guR2V0U291cmNlQXJndW1lbnRzLGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JbmRleFF1ZXJ5UmVzcG9uc2U8Z2xvYmFsOjpDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbD4+KENvZGV4U2VydmljZU1ldGhvZC5HZXRTb3VyY2UsIGFyZ3VtZW50cywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklDb2RleCwgZ2xvYmFsOjpTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzLlRhc2s8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLkluZGV4UXVlcnlSZXNwb25zZTxnbG9iYWw6OkNvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPj4+KShjID0+IGMuR2V0U291cmNlQXN5bmMoYXJndW1lbnRzKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0Pj4gU2VhcmNoQXN5bmMoU2VhcmNoQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLlNlYXJjaEFyZ3VtZW50cyxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdD4+KENvZGV4U2VydmljZU1ldGhvZC5TZWFyY2gsIGFyZ3VtZW50cywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklDb2RleCwgZ2xvYmFsOjpTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzLlRhc2s8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLkluZGV4UXVlcnlIaXRzUmVzcG9uc2U8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQ+Pj4pKGMgPT4gYy5TZWFyY2hBc3luYyhhcmd1bWVudHMpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIFRhc2s8VFJlc3VsdD4gUG9zdEFzeW5jPFRBcmd1bWVudHMsIFRSZXN1bHQ+KFxyXG4gICAgICAgICAgICBDb2RleFNlcnZpY2VNZXRob2Qgc2VhcmNoTWV0aG9kLCBcclxuICAgICAgICAgICAgVEFyZ3VtZW50cyBhcmd1bWVudHMsIFxyXG4gICAgICAgICAgICBGdW5jPElDb2RleCwgVGFzazxUUmVzdWx0Pj4gZnVuYylcclxuICAgICAgICAgICAgd2hlcmUgVFJlc3VsdCA6IEluZGV4UXVlcnlSZXNwb25zZSwgbmV3KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRhc2tDb21wbGV0aW9uU291cmNlPFRSZXN1bHQ+IHRjcyA9IG5ldyBUYXNrQ29tcGxldGlvblNvdXJjZTxUUmVzdWx0PigpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVybCA9IGJhc2VVcmwgKyBzZWFyY2hNZXRob2QuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUodXJsKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcmd1bWVudHNEYXRhID0gSnNvbkNvbnZlcnQuU2VyaWFsaXplT2JqZWN0KGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29uZmlnID0gbmV3IFJldHlwZWQuanF1ZXJ5LkpRdWVyeUFqYXhTZXR0aW5nc1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gYXJndW1lbnRzRGF0YSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGNvbnRlbnRUeXBlIG9mIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSAoZGF0YSwgdGV4dFN0YXR1cywgc3VjY2Vzc1JlcXVlc3QpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGNzLlNldFJlc3VsdChKc29uQ29udmVydC5EZXNlcmlhbGl6ZU9iamVjdDxUUmVzdWx0PihzdWNjZXNzUmVxdWVzdC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSAoZXJyb3JSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0Y3MuU2V0UmVzdWx0KG5ldyBUUmVzdWx0KClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yID0gc3RyaW5nLkZvcm1hdChcIkVycm9yOiB7MH1cIixlcnJvclRocm93bikgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJldHlwZWQuanF1ZXJ5LmpRdWVyeS5hamF4KGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGNzLlRhc2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
